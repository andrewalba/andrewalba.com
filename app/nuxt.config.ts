import routeRules from './updatedRouteRules.js';

type HTTPStatusCode = 200 | 301 | 302 | 404 | 500;

// Define the interface for the route rules
interface RouteRule {
    redirect: {
        to: string;
        statusCode: HTTPStatusCode; // Use the correct type for statusCode
    };
}

interface RouteRules {
    [key: string]: RouteRule;
}


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    vite: {
        build: {
            target: 'es2020',
        },
    },
    sourcemap: {
        server: process.env.NODE_ENV !== 'production',
        client: process.env.NODE_ENV !== 'production'
    },
    ui: {
        theme: {
            colors: ['crete', 'atlantis', 'copper', 'boston-blue', 'shark','abbey','nevada'],
        }
    },
    modules: [
        '@nuxt/content',
        'nuxt-security',
        'nuxt-svgo',
        '@nuxt/ui'
    ],
    nitro: {
        prerender: {
            ignore: ['/sitemap.xml']
        },
        preset: "cloudflare_module",
        cloudflare: {
            deployConfig: true,
            nodeCompat: true
        }
    },
    svgo: {
        defaultImport: 'component',
    },
    runtimeConfig: {
        apiUrl: process.env.API_URL,
        public: {
            siteUrl: process.env.SITE_URL ?? 'https://andrewalba.com',
            honeypotThreshold: process.env.HONEYPOT_THRESHOLD ?? "5",
        }
    },
    security: {
        headers: {
            contentSecurityPolicy: {
                'img-src': [
                    "'self'",
                    "data:",
                ],
                'script-src': [
                    "'self'",
                    "'unsafe-eval'",  // Required for the QR code library
                    'https:',
                    "'unsafe-inline'",
                    "https://static.cloudflareinsights.com/"
                ],
            }
        },
    },
    routeRules: routeRules as RouteRules
})
