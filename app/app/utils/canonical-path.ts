const DEFAULT_SITE_ORIGIN = 'https://andrewalba.com'

/**
 * Normalize a pathname for canonical URLs: lowercase, no query/hash, trailing slash on all paths.
 */
export function normalizeCanonicalPath(pathname: string): string {
    if (!pathname || pathname === '/') {
        return '/'
    }

    let path = pathname.split('?')[0].split('#')[0].trim().toLowerCase()
    if (!path.startsWith('/')) {
        path = `/${path}`
    }
    path = path.replace(/\/+$/, '') || '/'
    if (path !== '/') {
        path = `${path}/`
    }
    return path
}

export function buildCanonicalUrl(pathname: string, siteOrigin = DEFAULT_SITE_ORIGIN): string {
    const origin = siteOrigin.replace(/\/+$/, '')
    const path = normalizeCanonicalPath(pathname)
    return path === '/' ? `${origin}/` : `${origin}${path}`
}