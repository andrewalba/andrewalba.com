import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {
    CLOUDFLARE_HEADERS_MAX_LINE_LENGTH,
    CLOUDFLARE_HEADERS_MAX_RULES,
    validateCloudflareHeaders,
} from './validateCloudflareHeaders.ts'

describe('validateCloudflareHeaders', () => {
    it('accepts a single catch-all rule within limits', () => {
        const result = validateCloudflareHeaders(`/*
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: no-referrer
`)
        assert.equal(result.valid, true)
        assert.equal(result.ruleCount, 1)
    })

    it('rejects more than 100 path rules', () => {
        const rules = Array.from(
            {length: CLOUDFLARE_HEADERS_MAX_RULES + 1},
            (_, i) => `/route-${i}\n  X-Test: 1`,
        ).join('\n')
        const result = validateCloudflareHeaders(rules)
        assert.equal(result.valid, false)
        assert.equal(result.ruleCount, CLOUDFLARE_HEADERS_MAX_RULES + 1)
    })

    it('rejects lines longer than 2000 characters', () => {
        const longValue = 'a'.repeat(CLOUDFLARE_HEADERS_MAX_LINE_LENGTH + 1)
        const result = validateCloudflareHeaders(`/*
  Content-Security-Policy: ${longValue}
`)
        assert.equal(result.valid, false)
        assert.deepEqual(result.linesOverMaxLength, [2])
    })

    it('does not count indented header lines as rules', () => {
        const result = validateCloudflareHeaders(`/a
  header-one: 1
  header-two: 2
/b
  header-one: 1
`)
        assert.equal(result.ruleCount, 2)
    })
})