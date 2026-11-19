import type {RedirectRouteRule} from './generateStoicismRedirects'

/** Non-stoicism legacy URL redirects. */
export const staticRedirectRouteRules: Record<string, RedirectRouteRule> = {
    '/contact': {
        redirect: {to: '/#contact', statusCode: 301},
    },
    '/about': {
        redirect: {to: '/#about', statusCode: 301},
    },
}