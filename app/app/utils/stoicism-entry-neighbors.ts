export type StoicismNavEntry = {
    path: string
    stem: string
    title?: string
}

export type StoicismEntryNeighbors = {
    prev: StoicismNavEntry | null
    next: StoicismNavEntry | null
}

function sortedByStem(entries: StoicismNavEntry[]): StoicismNavEntry[] {
    return [...entries].sort((a, b) => a.stem.localeCompare(b.stem))
}

/**
 * Resolve chronologically adjacent stoicism entries within a month, optionally crossing month boundaries.
 */
export function resolveStoicismEntryNeighbors(
    monthEntries: StoicismNavEntry[],
    currentStem: string,
    previousMonthEntries?: StoicismNavEntry[],
    nextMonthEntries?: StoicismNavEntry[],
): StoicismEntryNeighbors {
    const posts = sortedByStem(monthEntries)
    const index = posts.findIndex((entry) => entry.stem === currentStem)
    if (index === -1) {
        return {prev: null, next: null}
    }

    let prev: StoicismNavEntry | null = index > 0 ? (posts[index - 1] ?? null) : null
    let next: StoicismNavEntry | null =
        index < posts.length - 1 ? (posts[index + 1] ?? null) : null

    if (!prev && previousMonthEntries?.length) {
        const priorMonth = sortedByStem(previousMonthEntries)
        prev = priorMonth[priorMonth.length - 1] ?? null
    }

    if (!next && nextMonthEntries?.length) {
        const followingMonth = sortedByStem(nextMonthEntries)
        next = followingMonth[0] ?? null
    }

    return {prev, next}
}