import {describe, it} from 'node:test'
import assert from 'node:assert/strict'
import {generateStoicismRedirects} from './generateStoicismRedirects.ts'

describe('generateStoicismRedirects', () => {
    it('emits a redirect for every article and fixes known bad legacy targets', () => {
        const rules = generateStoicismRedirects()

        assert.equal(rules['/stoicism/education-is-freedom'].redirect.to, '/stoicism/01/02/')
        assert.equal(rules['/stoicism/revenge-is-a-dish-best-not-served'].redirect.to, '/stoicism/10/13/')
        assert.equal(
            rules['/stoicism/give-people-the-benefit-of-the-doubt'].redirect.to,
            '/stoicism/10/15/',
        )
        const stoicismRules = Object.keys(rules).filter((key) => key.startsWith('/stoicism/'))
        assert.equal(stoicismRules.length, 405)

        for (const rule of Object.values(rules)) {
            assert.equal(rule.redirect.statusCode, 301)
            assert.doesNotMatch(rule.redirect.to, /NaN/)
        }
    })
})