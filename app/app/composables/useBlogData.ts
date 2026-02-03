import { ref } from 'vue'

import type { Blog } from '~/models/blog'

export function useBlogData() {

    const blog = ref<Blog>({
        title: "The Occasional Update",
        description: "Welcome to \"The Occasional Update,\" a personal collection of reflections on life and travel. Here, you'll find stories and insights from my adventures and everyday experiences, capturing the moments that shape my journey. Each post is a glimpse into the beauty and unpredictability of life, offering a candid look at the places I visit and the events that leave a mark on my heart. Join me as I share the joys, challenges, and discoveries that come with exploring the world and navigating the twists and turns of life."
    })

    return {
        blog,
    }
}
