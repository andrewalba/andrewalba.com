/**
 * Slugify stoicism titles the same way legacy `/stoicism/{slug}` URLs were formed.
 */
export function stoicismTitleToSlug(title: string): string {
    return title
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
}

/**
 * Alternate slug shapes that were indexed or linked under the old title-based routes.
 */
export function legacySlugAliases(primarySlug: string): string[] {
    const aliases = new Set<string>()

    const add = (slug: string) => {
        if (slug && slug !== primarySlug) {
            aliases.add(slug)
        }
    }

    if (primarySlug.includes('dont')) {
        add(
            primarySlug
                .replace(/-dont-/g, '-do-not-')
                .replace(/^dont-/, 'do-not-')
                .replace(/-dont$/, '-do-not'),
        )
    }

    if (primarySlug.startsWith('whats-')) {
        add(primarySlug.replace(/^whats-/, 'what-is-'))
    }

    if (primarySlug.includes('-were-')) {
        add(primarySlug.replace(/-were-/, '-we-are-'))
    }

    if (primarySlug.includes('-itd-')) {
        add(primarySlug.replace(/-itd-/, '-it-would-'))
    }

    if (primarySlug.includes('-youve-')) {
        add(primarySlug.replace(/-youve-/, '-you-have-'))
    }

    return [...aliases]
}

/**
 * Legacy URLs sometimes kept a trailing hyphen when the title ended with an ellipsis.
 */
export function ellipsisLegacySlugVariants(title: string, primarySlug: string): string[] {
    const trimmed = title.trim()
    if (/\.\.\.$/.test(trimmed) || /…$/.test(trimmed)) {
        const withTrailingHyphen = `${primarySlug}-`
        if (withTrailingHyphen !== primarySlug) {
            return [withTrailingHyphen]
        }
    }
    return []
}