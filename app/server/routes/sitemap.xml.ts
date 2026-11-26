import {SitemapStream, streamToPromise} from 'sitemap'
import {normalizeCanonicalPath} from '../../app/utils/canonical-path'
import {
    SITEMAP_CONTENT_COLLECTIONS,
    SITEMAP_STATIC_PATHS,
    stoicismMonthIndexPaths,
    uniqueSitemapPaths,
} from '../../app/utils/sitemap-paths'

const BASE_URL = 'https://andrewalba.com'

export default defineEventHandler(async (event) => {
    const paths: string[] = [...SITEMAP_STATIC_PATHS, ...stoicismMonthIndexPaths()]

    for (const collection of SITEMAP_CONTENT_COLLECTIONS) {
        const docs = await queryCollection(event, collection).select('path').all()
        for (const doc of docs) {
            if (doc.path) {
                paths.push(doc.path)
            }
        }
    }

    const sitemap = new SitemapStream({hostname: BASE_URL})
    for (const path of uniqueSitemapPaths(paths)) {
        sitemap.write({url: normalizeCanonicalPath(path), changefreq: 'monthly'})
    }
    sitemap.end()
    return streamToPromise(sitemap)
})