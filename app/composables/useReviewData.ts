import { ref } from 'vue'

import type { Review } from '~/models/review'

export function useReviewData() {

    const review = ref<Review>({
        title: "Honest Reviews: Whiskey and Beyond",
        description: "Welcome to our review space, where we share our candid thoughts on whiskey, beer, food, electronics, software, and anything else that piques our interest. This blog is a personal reflection of our experiences, offering honest opinions and insights on a diverse range of products and services. We believe in transparency and authenticity, and we invite you to join us on this journey. Whether you're a fellow enthusiast or simply curious, we welcome your suggestions for items to review and look forward to sharing our discoveries with you!"
    })

    return {
        review,
    }
}
