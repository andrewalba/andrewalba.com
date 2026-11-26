<script setup lang="ts">
import type {StoicismEntryNeighbors} from '~/utils/stoicism-entry-neighbors'

defineProps<{
    monthSlug: string
    monthLabel: string
    neighbors: StoicismEntryNeighbors
}>()
</script>

<template>
  <nav
      aria-label="Stoicism entry navigation"
      class="flex w-full flex-col gap-4 border-t border-gray-200 pt-8 dark:border-gray-700"
  >
  <div class="flex flex-wrap gap-4 text-sm font-medium text-primary-600">
      <NuxtLink :to="`/stoicism/months/${monthSlug}`" class="hover:underline">
        &larr; {{ monthLabel }} archive
      </NuxtLink>
      <NuxtLink to="/stoicism" class="hover:underline">
        All months
      </NuxtLink>
    </div>
    <div class="flex w-full flex-col gap-3 sm:flex-row sm:justify-between">
      <NuxtLink
          v-if="neighbors.prev"
          :to="neighbors.prev.path"
          class="text-sm font-medium text-primary-600 hover:underline"
      >
        &larr; {{ neighbors.prev.title ?? 'Previous day' }}
      </NuxtLink>
      <span v-else class="text-sm text-gray-400" aria-hidden="true" />
      <NuxtLink
          v-if="neighbors.next"
          :to="neighbors.next.path"
          class="text-sm font-medium text-primary-600 hover:underline sm:text-right"
      >
        {{ neighbors.next.title ?? 'Next day' }} &rarr;
      </NuxtLink>
    </div>
  </nav>
</template>