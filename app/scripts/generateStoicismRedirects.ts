import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
    ellipsisLegacySlugVariants,
    legacySlugAliases,
    stoicismTitleToSlug,
} from './stoicism-slug.ts'

export type RedirectRouteRule = {
    redirect: {
        to: string
        statusCode: 301
    }
}

const APP_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

function parseTitle(markdown: string): string | null {
    const frontmatter = markdown.match(/^---\n([\s\S]*?)\n---/)
    if (!frontmatter) {
        return null
    }
    const match = frontmatter[1].match(/^title:\s*(.+)$/m)
    return match ? match[1].trim() : null
}

function redirectRule(to: string): RedirectRouteRule {
    return {redirect: {to, statusCode: 301}}
}

/**
 * Build Nitro `routeRules` redirects from stoicism markdown under `content/stoicism/{month}/{day}.md`.
 */
export function generateStoicismRedirects(
    stoicismContentDir: string = path.join(APP_ROOT, 'content', 'stoicism'),
): Record<string, RedirectRouteRule> {
    const rules: Record<string, RedirectRouteRule> = {}
    const slugOwners = new Map<string, string>()

    const register = (slug: string, target: string) => {
        const from = `/stoicism/${slug}`
        const existingTarget = slugOwners.get(slug)
        if (existingTarget && existingTarget !== target) {
            throw new Error(
                `Duplicate stoicism legacy slug "${slug}" → ${existingTarget} and ${target}`,
            )
        }
        slugOwners.set(slug, target)
        rules[from] = redirectRule(target)
    }

    for (const month of fs.readdirSync(stoicismContentDir)) {
        const monthDir = path.join(stoicismContentDir, month)
        if (!fs.statSync(monthDir).isDirectory()) {
            continue
        }

        for (const filename of fs.readdirSync(monthDir)) {
            if (!filename.endsWith('.md')) {
                continue
            }

            const day = filename.replace(/\.md$/, '')
            const target = `/stoicism/${month}/${day}/`
            const markdown = fs.readFileSync(path.join(monthDir, filename), 'utf8')
            const title = parseTitle(markdown)
            if (!title) {
                throw new Error(`Missing title in ${path.join(monthDir, filename)}`)
            }

            const primarySlug = stoicismTitleToSlug(title)
            register(primarySlug, target)

            for (const alias of legacySlugAliases(primarySlug)) {
                register(alias, target)
            }

            for (const variant of ellipsisLegacySlugVariants(title, primarySlug)) {
                register(variant, target)
            }

        }
    }

    return rules
}

/** Cloudflare `_redirects` lines: bare MM/DD path → trailing-slash URL (not Nitro routeRules). */
export function generateStoicismTrailingSlashRedirectLines(
    stoicismContentDir: string = path.join(APP_ROOT, 'content', 'stoicism'),
): string[] {
    const lines: string[] = []

    for (const month of fs.readdirSync(stoicismContentDir)) {
        const monthDir = path.join(stoicismContentDir, month)
        if (!fs.statSync(monthDir).isDirectory()) {
            continue
        }

        for (const filename of fs.readdirSync(monthDir)) {
            if (!filename.endsWith('.md')) {
                continue
            }
            const day = filename.replace(/\.md$/, '')
            lines.push(`/stoicism/${month}/${day}\t/stoicism/${month}/${day}/\t301`)
        }
    }

    return lines
}