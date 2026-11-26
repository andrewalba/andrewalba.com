import {normalizeCanonicalPath} from './canonical-path.ts'
import {STOICISM_MONTHS} from './stoicism-months.ts'

/** Collections whose documents represent indexable site routes in the sitemap. */
export const SITEMAP_CONTENT_COLLECTIONS = ['blog', 'stoicism', 'reviews'] as const

export const SITEMAP_STATIC_PATHS = ['/', '/blog', '/stoicism', '/reviews'] as const

const SITEMAP_EXCLUDED_PATH_PREFIXES = ['/legal/'] as const

export function isSitemapExcludedPath(pathname: string): boolean {
    const normalized = normalizeCanonicalPath(pathname)
    return SITEMAP_EXCLUDED_PATH_PREFIXES.some((prefix) => normalized.startsWith(prefix))
}

export function stoicismMonthIndexPaths(): string[] {
    return STOICISM_MONTHS.map((month) => `/stoicism/months/${month.slug}`)
}

/** Dedupe and normalize paths for sitemap emission (trailing slash, lowercase). */
export function uniqueSitemapPaths(paths: Iterable<string>): string[] {
    const seen = new Set<string>()
    for (const path of paths) {
        if (!path || isSitemapExcludedPath(path)) {
            continue
        }
        seen.add(normalizeCanonicalPath(path))
    }
    return [...seen].sort((a, b) => a.localeCompare(b))
}