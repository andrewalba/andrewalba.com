<script setup lang="ts">
import {useStoicismData} from '~/composables/useStoicismData'
import {STOICISM_MONTHS} from '~/utils/stoicism-months'

definePageMeta({
    layout: 'default',
})

const {stoicism} = useStoicismData()

useHead({
    title: 'Andrew Alba | A Year of Stoicism',
    meta: [
        {
            name: 'description',
            content: 'Daily Stoic reflections by month — browse meditations from A Year of Stoicism.',
        },
    ],
})
</script>

<template>
  <section id="article-stoicism" class="bg-white dark:bg-gray-900 w-full pb-24 mb-0">
    <div class="w-full pb-40 pt-20 bg-primary-600 px-4 sm:px-40">
      <h1 class="text-6xl font-bold text-center text-gray-900 dark:text-white mb-4">{{ stoicism.title }}</h1>
      <p class="text-center text-gray-900 dark:text-gray-100 italic max-w-3xl mx-auto">{{ stoicism.description }}</p>
    </div>
    <div class="bg-white w-full sm:max-w-7xl dark:bg-gray-800 text-gray-700 dark:text-gray-100 rounded-3xl flex flex-col items-center shadow-md -mt-20 mx-auto p-10 gap-10">
      <p class="text-center text-gray-600 dark:text-gray-300">
        Choose a month to browse daily meditations.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        <NuxtLink
            v-for="month in STOICISM_MONTHS"
            :key="month.slug"
            :to="`/stoicism/months/${month.slug}`"
            class="rounded-lg border border-gray-200 dark:border-gray-600 px-6 py-8 text-center shadow-sm transition hover:border-primary-500 hover:shadow-md"
        >
          <span class="text-lg font-semibold text-gray-900 dark:text-white">{{ month.label }}</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
