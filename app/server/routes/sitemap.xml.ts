import {SitemapStream, streamToPromise} from 'sitemap'
import {normalizeCanonicalPath} from '../../app/utils/canonical-path'

const BASE_URL = 'https://andrewalba.com'

function sitemapPath(url: string): string {
    return normalizeCanonicalPath(url)
}

const CONTENT_COLLECTIONS = ['content', 'blog', 'stoicism', 'reviews', 'legal'] as const

const STATIC_PATHS = ['/', '/blog', '/stoicism', '/reviews'] as const

const STOICISM_MONTH_SLUGS = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
] as const

export default defineEventHandler(async (event) => {
    const sitemap = new SitemapStream({hostname: BASE_URL})

    for (const collection of CONTENT_COLLECTIONS) {
        const docs = await queryCollection(event, collection).select('path').all()
        for (const doc of docs) {
            if (doc.path) {
                sitemap.write({url: sitemapPath(doc.path), changefreq: 'monthly'})
            }
        }
    }

    for (const path of STATIC_PATHS) {
        sitemap.write({url: sitemapPath(path), changefreq: 'monthly'})
    }

    for (const month of STOICISM_MONTH_SLUGS) {
        sitemap.write({url: sitemapPath(`/stoicism/months/${month}`), changefreq: 'monthly'})
    }

    sitemap.end()
    return streamToPromise(sitemap)
})
