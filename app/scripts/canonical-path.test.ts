import {describe, it} from 'node:test'
import assert from 'node:assert/strict'
import {buildCanonicalUrl, normalizeCanonicalPath} from '../app/utils/canonical-path.ts'

describe('normalizeCanonicalPath', () => {
    it('keeps root as slash', () => {
        assert.equal(normalizeCanonicalPath('/'), '/')
        assert.equal(normalizeCanonicalPath(''), '/')
    })

    it('appends trailing slash and strips query or hash', () => {
        assert.equal(normalizeCanonicalPath('/stoicism/06/25'), '/stoicism/06/25/')
        assert.equal(normalizeCanonicalPath('/blog/foo?utm=1'), '/blog/foo/')
        assert.equal(normalizeCanonicalPath('/reviews#top'), '/reviews/')
    })

    it('lowercases path segments', () => {
        assert.equal(normalizeCanonicalPath('/Stoicism/06/25'), '/stoicism/06/25/')
    })
})

describe('buildCanonicalUrl', () => {
    it('uses apex origin with trailing slash paths', () => {
        assert.equal(
            buildCanonicalUrl('/stoicism/06/25'),
            'https://andrewalba.com/stoicism/06/25/',
        )
        assert.equal(buildCanonicalUrl('/'), 'https://andrewalba.com/')
    })
})