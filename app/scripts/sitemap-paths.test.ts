import {describe, it} from 'node:test'
import assert from 'node:assert/strict'
import {
    isSitemapExcludedPath,
    SITEMAP_CONTENT_COLLECTIONS,
    stoicismMonthIndexPaths,
    uniqueSitemapPaths,
} from '../app/utils/sitemap-paths.ts'

describe('isSitemapExcludedPath', () => {
    it('excludes legal utility pages', () => {
        assert.equal(isSitemapExcludedPath('/legal/privacy'), true)
        assert.equal(isSitemapExcludedPath('/legal/terms/'), true)
    })

    it('allows primary content sections', () => {
        assert.equal(isSitemapExcludedPath('/blog/belle'), false)
        assert.equal(isSitemapExcludedPath('/stoicism/01/27'), false)
    })
})

describe('uniqueSitemapPaths', () => {
    it('dedupes duplicate doc paths and normalizes trailing slashes', () => {
        const paths = uniqueSitemapPaths([
            '/blog/belle',
            '/blog/belle/',
            '/stoicism/01/27',
            '/legal/privacy',
        ])
        assert.deepEqual(paths, ['/blog/belle/', '/stoicism/01/27/'])
    })
})

describe('sitemap collections', () => {
    it('indexes only primary content collections', () => {
        assert.deepEqual(SITEMAP_CONTENT_COLLECTIONS, ['blog', 'stoicism', 'reviews'])
    })

    it('emits twelve month hub paths', () => {
        assert.equal(stoicismMonthIndexPaths().length, 12)
        assert.equal(stoicismMonthIndexPaths()[0], '/stoicism/months/01')
    })
})