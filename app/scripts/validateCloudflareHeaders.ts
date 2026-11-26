import fs from 'node:fs'
import path from 'node:path'

/** Cloudflare Pages `_headers` limits (static assets). */
export const CLOUDFLARE_HEADERS_MAX_RULES = 100
export const CLOUDFLARE_HEADERS_MAX_LINE_LENGTH = 2000

export type CloudflareHeadersValidation = {
    ruleCount: number
    linesOverMaxLength: number[]
    valid: boolean
}

/**
 * Validate a `_headers` file against Cloudflare Pages constraints.
 * Each path pattern (non-indented line) counts as one rule.
 */
export function validateCloudflareHeaders(contents: string): CloudflareHeadersValidation {
    const lines = contents.split('\n')
    const linesOverMaxLength: number[] = []
    let ruleCount = 0

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        const lineNumber = i + 1
        if (line.length > CLOUDFLARE_HEADERS_MAX_LINE_LENGTH) {
            linesOverMaxLength.push(lineNumber)
        }
        if (line.length > 0 && !/^\s/.test(line)) {
            ruleCount++
        }
    }

    return {
        ruleCount,
        linesOverMaxLength,
        valid:
            ruleCount <= CLOUDFLARE_HEADERS_MAX_RULES
            && linesOverMaxLength.length === 0,
    }
}

export function validateCloudflareHeadersFile(headersPath: string): CloudflareHeadersValidation {
    if (!fs.existsSync(headersPath)) {
        return {ruleCount: 0, linesOverMaxLength: [], valid: true}
    }
    return validateCloudflareHeaders(fs.readFileSync(headersPath, 'utf8'))
}

export function formatCloudflareHeadersValidation(
    result: CloudflareHeadersValidation,
): string {
    if (result.valid) {
        return `Cloudflare _headers OK (${result.ruleCount} rules).`
    }
    const parts: string[] = []
    if (result.ruleCount > CLOUDFLARE_HEADERS_MAX_RULES) {
        parts.push(
            `${result.ruleCount} header rules (max ${CLOUDFLARE_HEADERS_MAX_RULES})`,
        )
    }
    if (result.linesOverMaxLength.length > 0) {
        parts.push(
            `${result.linesOverMaxLength.length} line(s) exceed ${CLOUDFLARE_HEADERS_MAX_LINE_LENGTH} chars`,
        )
    }
    return `Invalid Cloudflare _headers: ${parts.join('; ')}.`
}