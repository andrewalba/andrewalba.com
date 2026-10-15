export const STOICISM_MONTHS = [
    {slug: '01', label: 'January'},
    {slug: '02', label: 'February'},
    {slug: '03', label: 'March'},
    {slug: '04', label: 'April'},
    {slug: '05', label: 'May'},
    {slug: '06', label: 'June'},
    {slug: '07', label: 'July'},
    {slug: '08', label: 'August'},
    {slug: '09', label: 'September'},
    {slug: '10', label: 'October'},
    {slug: '11', label: 'November'},
    {slug: '12', label: 'December'},
] as const

export type StoicismMonthSlug = (typeof STOICISM_MONTHS)[number]['slug']

export function isStoicismMonthSlug(value: string): value is StoicismMonthSlug {
    return STOICISM_MONTHS.some((month) => month.slug === value)
}

export function stoicismMonthLabel(slug: StoicismMonthSlug): string {
    return STOICISM_MONTHS.find((month) => month.slug === slug)?.label ?? slug
}
