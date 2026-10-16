import redirectRouteRules from './updatedRouteRules.js';

const prerenderRouteRules = {
    '/': {prerender: true},
    '/blog/**': {prerender: true},
    '/stoicism/**': {prerender: true},
    '/reviews/**': {prerender: true},
    '/legal/**': {prerender: true},
    '/sitemap.xml': {prerender: true},
    '/api/**': {prerender: false},
} as const;

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
    modules: ['@nuxt/content', 'nuxt-security', 'nuxt-svgo', '@nuxt/ui', '@nuxt/image'],
    content: {
        // Static hosting: build-time SQLite + browser WASM for client navigation (no D1 on read paths).
        database: {
            type: 'sqlite',
            filename: ':memory:',
        },
    },
    nitro: {
        prerender: {
            crawlLinks: true,
        },
        preset: 'cloudflare_pages',
        cloudflare: {
            deployConfig: true,
            nodeCompat: true,
            pages: {
                defaultRoutes: false,
                routes: {
                    version: 1,
                    include: ['/api/*'],
                    exclude: [],
                },
            },
        },
    },
    hooks: {
        'nitro:config'(nitroConfig) {
            // @nuxt/content's Cloudflare preset forces D1; static deploy uses in-memory SQLite + WASM only.
            nitroConfig.runtimeConfig ||= {}
            nitroConfig.runtimeConfig.content ||= {}
            nitroConfig.runtimeConfig.content.database = {
                type: 'sqlite',
                filename: ':memory:',
            }
            nitroConfig.runtimeConfig.content.integrityCheck = false
        },
    },
    svgo: {
        defaultImport: 'component',
    },
    runtimeConfig: {
        resendApiKey: process.env.RESEND_API_KEY,
        public: {
            siteUrl: process.env.SITE_URL ?? 'https://andrewalba.com',
            honeypotThreshold: process.env.HONEYPOT_THRESHOLD ?? "5",
            cloudinaryUrl: process.env.CLOUDINARY_URL ?? "",
            resendTemplateId: process.env.RESEND_TEMPLATE_ID ?? "",
        }
    },
    security: {
        headers: {
            contentSecurityPolicy: {
                'img-src': [
                    "'self'",
                    "data:",
                    "https://res.cloudinary.com/",
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
    routeRules: {
        ...prerenderRouteRules,
        ...redirectRouteRules,
    },
})
