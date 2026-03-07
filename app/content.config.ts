import {defineContentConfig, defineCollection} from '@nuxt/content'

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: 'page',
            source: '**/*.md'
        }),

        blog: defineCollection({
            type: 'page',
            source: 'blog/**/*.md'
        }),

        legal: defineCollection({
            type: 'page',
            source: 'legal/**/*.md'
        }),

        reviews: defineCollection({
            type: 'page',
            source: 'reviews/**/*.md'
        }),

        stoicism: defineCollection({
            type: 'page',
            source: 'stoicism/**/*.md'
        }),
    }
})
