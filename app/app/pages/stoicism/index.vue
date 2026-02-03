<script setup lang="ts">
import { format } from 'date-fns'
import { useStoicismData } from "~/composables/useStoicismData";

definePageMeta({
  layout: "default",
});

const { stoicism } = useStoicismData()
//const datum: any[] = [];
const articleYear = new Date(new Date().setFullYear(2021))

const datum = await queryContent('/stoicism')
    .where({ _path: { $contains: 'stoicism' } })
    .find()

const pubDate = (dateStr: string): string => {
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) {
    return 'Invalid date' // Return a fallback string if the date is invalid
  }
  return format(date, "MMMM do, yyyy")
}
</script>

<template>
  <section id="article-privacy" class="bg-white dark:bg-gray-900 w-full pb-24 mb-0">
    <div class="w-full pb-40 pt-20 bg-primary-600 px-4 sm:px-40">
      <h1 class="text-6xl font-bold text-center text-gray-900 dark:text-white mb-4">{{ stoicism.title }}</h1>
      <p class="text-center text-gray-900 dark:text-gray-100 italic">{{ stoicism.description }}</p>
    </div>
    <div class="bg-white w-full sm:max-w-7xl dark:bg-gray-800 text-gray-700 dark:text-gray-100 rounded-3xl flex flex-col items-center shadow-md -mt-20 mx-auto p-10 gap-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <template v-for="data in datum">
          <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
                :alt="data.description"
                :src="data.backgroundImage"
                class="h-56 w-full object-cover"
            />

            <div class="bg-white p-4 sm:p-6">
              <time :datetime="data.last_updated_at" class="block text-xs text-gray-500">
                {{ pubDate(data.last_updated_at) }}
              </time>

              <NuxtLink :to="data._path"
                        :title="data.title">
                <h3 class="mt-0.5 text-lg text-gray-900">
                  {{ data.title }}
                </h3>
              </NuxtLink>

              <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 h-full">
                {{ data.quotes[0].quote.content }}
              </p>

              <NuxtLink :to="data._path"
                        :title="data.title"
                        class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600">
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

<style scope>

</style>
