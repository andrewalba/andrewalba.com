// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    modules: [
        '@nuxt/content',
        'nuxt-security',
        '@nuxt/image',
        "nuxt-svgo",
    ],

    svgo: {
        defaultImport: 'component',
    },

    runtimeConfig: {
        public: {
            siteUrl: process.env.SITE_URL ?? 'https://andrewalba.com',
            apiUrl: process.env.API_URL,
        }
    },

    security: {
        headers: {
            contentSecurityPolicy: {
                'img-src': [
                    "'self'",
                    "data:",
                    "https://maps.gstatic.com/",
                    "https://d3iwoqnah6ycun.cloudfront.net/",
                ],
                'script-src': [
                    "'self'",
                    "'unsafe-eval'",  // Required for the QR code library
                    'https:',
                    "'unsafe-inline'"
                ],
            }
        },
    },

    content: {
        navigation: {
            fields: ['title', 'description', 'last_updated_at', 'backgroundImage', 'quotes'],
        },
        markdown: {
            toc: {
                depth: 3,
                searchDepth: 3
            },
            rehypePlugins: [
                'rehype-external-links'
            ]
        }
    },
})
