<script setup lang="ts">
import { shallowRef } from 'vue'
import { useSiteData } from "~/composables/useSiteData"

const { site } = useSiteData()
const isDarkMode = shallowRef(false)
const lightLogo = '/full-logo-light.svg'
const darkLogo = '/full-logo-dark.svg'

const checkDarkMode = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
}

onMounted(() => {
  // Check on mount
  checkDarkMode()

  // Listen for changes in system theme
  if (typeof window !== 'undefined' && window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkDarkMode)
  }
})
const logoSrc = computed(() => isDarkMode.value ? darkLogo : lightLogo)
const socialSuffix = computed(() => isDarkMode.value ? '-dark' : '')
</script>

<template>
  <footer class="bg-gray-100 dark:bg-gray-900">
    <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="flex justify-center text-primary">
        <img :src="logoSrc" class="h-16" alt="Andrew Alba logo"/>
      </div>

      <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-secondary-500 dark:text-secondary-200">
        Let’s stay connected! Find me on social media and join the conversation about code, philosophy, and whiskey—because life’s better when we share the good stuff. 🍻
      </p>

      <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <template v-for="item in site.footer_links" :key="item.name">
          <li>
            <NuxtLink :to="item.to"
                      :external="item.external"
                      :title="item.title"
                      class="text-crete-500 transition hover:text-crete-500/75 dark:text-crete-200 dark:hover:text-crete-200/75">
              {{ item.displayText }}
            </NuxtLink>
          </li>
        </template>
      </ul>

      <ul class="mt-12 flex justify-center gap-6 md:gap-8">
        <template v-for="item in site.social_links" :key="item.title">
          <li>
            <NuxtLink
                :to="item.href"
                :external=true
                rel="noreferrer"
                target="_blank"
                class="text-secondary-700 transition hover:text-secondary-700/75 dark:text-secondary-200 dark:hover:text-secondary-200/75"
            >
              <span class="sr-only">{{ item.display_title }}</span>
              <component :is="item.component + socialSuffix" class="h-6 w-6" aria-hidden="true"/>
            </NuxtLink>
          </li>
        </template>
      </ul>
      <div class="flex justify-center mt-10 text-secondary-700 transition dark:text-secondary-200">
        <p>Est. {{ site.established }}.</p>
      </div>
      <div class="flex justify-center text-secondary-700 transition  dark:text-secondary-200">
        <p>&copy; {{ site.copyright }} - {{ new Date().getFullYear() }} Andrew Alba. All rights reserved.</p>
      </div>
      <div class="flex justify-center text-secondary-700 transition dark:text-secondary-200">
        <p>Built by <NuxtLink :to="site.built.href" :title="site.built.title" class="text-primary-600">{{ site.built.title}}</NuxtLink></p>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
