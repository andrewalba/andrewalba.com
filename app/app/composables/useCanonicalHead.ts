import {buildCanonicalUrl, normalizeCanonicalPath} from '~/utils/canonical-path'

/**
 * Injects a single self-referencing canonical link and matching og:url for the current route.
 */
export function useCanonicalHead() {
    const route = useRoute()
    const {public: {siteUrl}} = useRuntimeConfig()

    const canonicalUrl = computed(() =>
        buildCanonicalUrl(route.path, String(siteUrl || 'https://andrewalba.com')),
    )

    useHead({
        link: [
            {
                key: 'canonical',
                rel: 'canonical',
                href: canonicalUrl,
            },
        ],
    })

    useSeoMeta({
        ogUrl: canonicalUrl,
    })

    return {canonicalUrl, canonicalPath: computed(() => normalizeCanonicalPath(route.path))}
}