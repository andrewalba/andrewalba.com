<script setup lang="ts">
import {format} from 'date-fns'
import {useStoicismData} from '~/composables/useStoicismData'
import {isStoicismMonthSlug, stoicismMonthLabel} from '~/utils/stoicism-months'

definePageMeta({
    layout: 'default',
})

const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const cloudinaryUrl = runtimeConfig.public.cloudinaryUrl
const {stoicism} = useStoicismData()

const rawMonth = String(route.params.month ?? '')

if (!isStoicismMonthSlug(rawMonth)) {
    throw createError({statusCode: 404, statusMessage: 'Month not found'})
}

const month = rawMonth
const monthLabel = stoicismMonthLabel(month)

type Quote = {
    content: string
    author: string
    source: string
}

type Quotes = {
    quote: Quote
}

type StoicismMeta = {
    backgroundImage?: string
    last_updated_at?: string
    quotes: Quotes[]
}

type StoicismPosts = {
    path: string
    title?: string
    description?: string
    meta: StoicismMeta
}

const {data: posts} = await useAsyncData<StoicismPosts[]>(
    () => `stoicism-month-${month}`,
    () =>
        queryCollection('stoicism')
            .select('path', 'title', 'description', 'meta')
            .where('stem', 'LIKE', `stoicism/${month}/%`)
            .all() as Promise<StoicismPosts[]>,
)

const pubDate = (dateStr?: string): string => {
    if (!dateStr) return ''
    return format(new Date(dateStr), 'MMMM do, yyyy')
}

useHead({
    title: `Andrew Alba | Stoicism — ${monthLabel}`,
    meta: [
        {
            name: 'description',
            content: `Daily Stoic reflections for ${monthLabel}.`,
        },
    ],
})
</script>

<template>
  <section id="article-stoicism" class="bg-white dark:bg-gray-900 w-full pb-24 mb-0">
    <div class="w-full pb-40 pt-20 bg-primary-600 px-4 sm:px-40">
      <h1 class="text-6xl font-bold text-center text-gray-900 dark:text-white mb-4">{{ monthLabel }}</h1>
      <p class="text-center text-gray-900 dark:text-gray-100 italic">{{ stoicism.title }}</p>
    </div>
    <div class="bg-white w-full sm:max-w-7xl dark:bg-gray-800 text-gray-700 dark:text-gray-100 rounded-3xl flex flex-col items-center shadow-md -mt-20 mx-auto p-10 gap-10">
      <NuxtLink
          to="/stoicism"
          class="self-start text-sm font-medium text-primary-600 hover:underline"
      >
        &larr; All months
      </NuxtLink>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        <template v-for="data in posts" :key="data.path">
          <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg flex flex-col h-full">
            <img
                :alt="data.description"
                :src="cloudinaryUrl + data.meta?.backgroundImage"
                class="h-56 w-full object-cover"
            />

            <div class="bg-white p-4 sm:p-6 flex flex-col flex-1 dark:bg-gray-800">
              <time :datetime="data.meta?.last_updated_at" class="block text-xs text-gray-500">
                {{ pubDate(data.meta?.last_updated_at) }}
              </time>

              <NuxtLink :to="data.path" :title="data.title">
                <h3 class="mt-0.5 text-lg text-gray-900 dark:text-gray-100">
                  {{ data.title }}
                </h3>
              </NuxtLink>

              <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 flex-1">
                {{ data.meta.quotes?.[0]?.quote.content || 'Default quote content' }}
              </p>

              <NuxtLink
                  :to="data.path"
                  :title="data.title"
                  class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600"
              >
                Read more
                <span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">&rarr;</span>
              </NuxtLink>
            </div>
          </article>
        </template>
      </div>
    </div>
  </section>
</template>
