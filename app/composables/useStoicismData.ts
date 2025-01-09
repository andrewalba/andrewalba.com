import { ref } from 'vue'

import type { Stoicism } from '~/models/stoicism'

export function useStoicismData() {

    const stoicism = ref<Stoicism>({
        title: "A Year of Stoicism",
        description: "Welcome to \"A Year of Stoicism,\" a reflective journey inspired by Ryan Holiday's *The Daily Stoic: 365 Meditations on Wisdom, Perseverance, and the Art of Living*. This blog is dedicated to exploring the timeless teachings of Stoicism and how they resonate in our modern lives. Each post offers a personal reflection on the daily meditations, revealing insights and practical applications that can guide us through life's challenges with resilience and clarity. Join us as we delve into the profound wisdom of Stoicism and discover the transformative power of living with intention and purpose."
    })

    return {
        stoicism,
    }
}
