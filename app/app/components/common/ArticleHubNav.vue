<script setup lang="ts">
defineProps<{
    indexPath: string
    indexLabel: string
}>()
</script>

<template>
  <nav
      aria-label="Section navigation"
      class="flex w-full max-w-7xl flex-wrap items-center gap-4 border-t border-gray-200 pt-8 dark:border-gray-700"
  >
    <NuxtLink
        :to="indexPath"
        class="text-sm font-medium text-primary-600 hover:underline"
    >
      &larr; {{ indexLabel }}
    </NuxtLink>
  </nav>
</template>