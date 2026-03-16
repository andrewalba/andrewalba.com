import { computed } from 'vue'
import type { Contact } from '~/models/contact'

export function useContactData() {
    const contact = computed<Contact>(() => ({
        title: "Want to Chat?",
        description: [
            "Got a question, a thought, or just want to say hi? I’d love to hear from you! Whether it’s about code, Stoicism, whiskey recommendations, or life in general, drop me a message using the contact form. Don’t overthink it—hit send, and let’s start a conversation!",
            "I promise, no spam and no bots—just me on the other side, excited to connect. Cheers! 🍻"
        ],
    }))

    return {
        contact,
    }
}
