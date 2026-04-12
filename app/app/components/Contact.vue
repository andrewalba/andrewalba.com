<script setup lang="ts">
import {computed, shallowRef} from 'vue'
import { useContactData } from "~/composables/useContactData"
import { useSiteData } from "~/composables/useSiteData"
import { differenceInSeconds } from "date-fns"
import ContactForm from "~/components/common/ContactForm.vue"
import Spinner from "~/components/common/Spinner.vue"
import Success from "~/components/common/Success.vue"
import type {ContactFormResponse} from "~/models/types/contact-form-response";

import type { Address } from '~/models/common'


const { contact } = useContactData()
const { getAddressByLabel } = useSiteData()

interface FormData {
  name: string,
  email: string,
  phone: string,
  mobile: string,
  form_time: Date | string,
  messageBody: string,
  subject?: string,
}

const showSpinner = shallowRef(false)
const showSuccess = shallowRef(false)
const showForm = computed(() => !showSuccess.value && !showSpinner.value)
const runtimeConfig = useRuntimeConfig()
const honeypotThreshold = runtimeConfig.public.honeypotThreshold

const getInitialFormData = (): FormData => ({
  name: "",
  email: "",
  phone: "",
  mobile: "",
  form_time: new Date(),
  messageBody: "",
})

const form = ref<FormData>(getInitialFormData())

const resetForm = () => {
  form.value = getInitialFormData()
}

const isFormValid = computed(() => {
  return form.value.name.trim() &&
      (form.value.email.trim() ||
      form.value.phone.trim()) &&
      form.value.messageBody.trim()
})

const submitForm = async () => {
  showSpinner.value = true
  // validate
  if (!isFormValid) {
    showSpinner.value = false
    return
  }
  try{
    const formData = form.value
    const submissionDT = new Date()
    const isOutsideThreshold = differenceInSeconds(submissionDT, formData.form_time) > parseInt(honeypotThreshold, 10)

    if (formData.mobile === '' && isOutsideThreshold) {
      const {mobile, form_time, ...contactForm} = formData
      contactForm.subject = 'General Inquiry';
      const contactFormResponse = await useApi<ContactFormResponse>('/api/contact-form', {
        method: 'POST',
        body: contactForm,
      })

      if (!contactFormResponse.success) {
        throw new Error('Failed to submit form')
      }
    }
    resetForm()
    showSpinner.value = false
    showSuccess.value = true
  } catch (e) {
    console.log(e)
    showSpinner.value = false
  }
}
const clearSuccess = () => {
  resetForm()
  showSuccess.value=false
}
const address = computed<Address>(() => {
  const value = getAddressByLabel("personal").value

  if (!value) {
    throw new Error('Address with label "personal" was not found')
  }

  return value
})
</script>

<template>
  <section id="contact" class="bg-gray-100 dark:bg-slate-700 text-black dark:text-slate-100">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div class="lg:col-span-2 lg:py-12">

          <h2 class="text-2xl font-extrabold mb-8">{{ contact.title }}</h2>

          <template v-for="description in contact.description">
            <p class="max-w-xl text-lg mb-6">{{ description }}</p>
          </template>

          <div class="mt-8">
            <address class="mt-2 not-italic">{{ address.city }}, {{ address.state }} {{ address.postal_code }}</address>
          </div>
        </div>

        <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">

          <Spinner v-if="showSpinner" />

          <ContactForm
              v-if="showForm"
              v-model:name.trim="form.name"
              v-model:email.trim="form.email"
              v-model:phone.trim="form.phone"
              v-model:mobile.trim="form.mobile"
              v-model:messageBody.trim="form.messageBody"
              @submit="submitForm"
          />

          <Success @updateClearSuccess="clearSuccess"
                   v-if="showSuccess" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
