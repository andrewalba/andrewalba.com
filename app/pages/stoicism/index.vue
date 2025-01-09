<script setup lang="ts">
import { format } from 'date-fns'
import { useStoicismData } from "~/composables/useStoicismData";

definePageMeta({
  layout: "default",
});

const { stoicism } = useStoicismData()
const datum: any[] = [];
let startDate = new Date(new Date().setDate(new Date().getDate()-2))
const endDate = new Date(new Date().setDate(new Date().getDate()+3))

do {
  const month = startDate.getMonth() + 1;
  const day = startDate.getDate();
  const { data } = await useAsyncData("article", () =>
      queryContent(`/stoicism/${month}/${day}`).findOne()
  )
  datum.push(data.value);
  startDate = new Date(startDate.setDate(startDate.getDate()+1));
} while (startDate <= endDate)

const pubDate = (dateStr: string): string => {
  return format(new Date(dateStr), "MMMM do, yyyy"); // "do" adds the ordinal suffix automatically
}
const buildLink = (dateStr: string): string => {
  const month = startDate.getMonth() + 1;
  const day = startDate.getDate();
  return `/stoicism/${month}/${day}`;
}
</script>

<template>
  <section id="article-privacy" class="bg-white dark:bg-gray-900 w-full pb-24 mb-0">
    <div class="w-full pb-40 pt-20 bg-primary-600 dark:bg-primary-800 px-40">
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
              <time :datetime="data.last_updated_at" class="block text-xs text-gray-500"> {{ pubDate(data.last_updated_at) }} </time>

              <a href="#">
                <h3 class="mt-0.5 text-lg text-gray-900">{{ data.title }}</h3>
              </a>

              <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 h-full">
                {{ data.quotes[0].quote.content }}
              </p>

              <NuxtLink :to="buildLink(data.last_updated_at)"
                        class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
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
