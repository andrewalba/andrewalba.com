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
        'nuxt-svgo',
    ],
    nitro: {
        prerender: {
            routes: ['/sitemap.xml']
        },
        server: {
            host: '0.0.0.0',
            port: process.env.PORT ? Number(process.env.PORT) : 3029
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
    routeRules: {
        "/stoicism/control-and-choice": {
            redirect: {
                to: "/stoicism/1/1",
                statusCode: 301
            }
        },
        "/stoicism/education-is-freedom": {
            redirect: {
                to: "/stoicism/1/2",
                statusCode: 301
            }
        },
        "/stoicism/be-ruthless-to-the-things-that-dont-matter": {
            redirect: {
                to: "/stoicism/1/3",
                statusCode: 301
            }
        },
        "/stoicism/the-big-three": {
            redirect: {
                to: "/stoicism/1/4",
                statusCode: 301
            }
        },
        "/stoicism/clarify-your-intentions": {
            redirect: {
                to: "/stoicism/1/5",
                statusCode: 301
            }
        },
        "/stoicism/where-who-what-and-why": {
            redirect: {
                to: "/stoicism/1/6",
                statusCode: 301
            }
        },
        "/stoicism/seven-clear-functions-of-the-mind": {
            redirect: {
                to: "/stoicism/1/7",
                statusCode: 301
            }
        },
        "/stoicism/seeing-our-addictions": {
            redirect: {
                to: "/stoicism/1/8",
                statusCode: 301
            }
        },
        "/stoicism/what-we-control-and-what-we-dont": {
            redirect: {
                to: "/stoicism/1/9",
                statusCode: 301
            }
        },
        "/stoicism/if-you-want-to-be-steady": {
            redirect: {
                to: "/stoicism/1/10",
                statusCode: 301
            }
        },
        "/stoicism/if-you-want-to-be-unsteady": {
            redirect: {
                to: "/stoicism/1/11",
                statusCode: 301
            }
        },
        "/stoicism/the-one-path-to-serenity": {
            redirect: {
                to: "/stoicism/1/12",
                statusCode: 301
            }
        },
        "/stoicism/circle-of-control": {
            redirect: {
                to: "/stoicism/1/13",
                statusCode: 301
            }
        },
        "/stoicism/cut-the-strings-that-pull-your-mind": {
            redirect: {
                to: "/stoicism/1/14",
                statusCode: 301
            }
        },
        "/stoicism/peace-is-in-staying-the-course": {
            redirect: {
                to: "/stoicism/1/15",
                statusCode: 301
            }
        },
        "/stoicism/never-do-anything-out-of-habit": {
            redirect: {
                to: "/stoicism/1/16",
                statusCode: 301
            }
        },
        "/stoicism/reboot-the-real-work": {
            redirect: {
                to: "/stoicism/1/17",
                statusCode: 301
            }
        },
        "/stoicism/see-the-world-like-a-poet-and-an-artist": {
            redirect: {
                to: "/stoicism/1/18",
                statusCode: 301
            }
        },
        "/stoicism/wherever-you-go-there-your-choice-is": {
            redirect: {
                to: "/stoicism/1/19",
                statusCode: 301
            }
        },
        "/stoicism/reignite-your-thoughts": {
            redirect: {
                to: "/stoicism/1/20",
                statusCode: 301
            }
        },
        "/stoicism/a-morning-ritual": {
            redirect: {
                to: "/stoicism/1/21",
                statusCode: 301
            }
        },
        "/stoicism/the-day-in-review": {
            redirect: {
                to: "/stoicism/1/22",
                statusCode: 301
            }
        },
        "/stoicism/the-truth-about-money": {
            redirect: {
                to: "/stoicism/1/23",
                statusCode: 301
            }
        },
        "/stoicism/push-for-deep-understanding": {
            redirect: {
                to: "/stoicism/1/24",
                statusCode: 301
            }
        },
        "/stoicism/the-only-prize": {
            redirect: {
                to: "/stoicism/1/25",
                statusCode: 301
            }
        },
        "/stoicism/the-power-of-a-mantra": {
            redirect: {
                to: "/stoicism/1/26",
                statusCode: 301
            }
        },
        "/stoicism/the-three-areas-of-training": {
            redirect: {
                to: "/stoicism/1/27",
                statusCode: 301
            }
        },
        "/stoicism/watching-the-wise": {
            redirect: {
                to: "/stoicism/1/28",
                statusCode: 301
            }
        },
        "/stoicism/keep-it-simple": {
            redirect: {
                to: "/stoicism/1/29",
                statusCode: 301
            }
        },
        "/stoicism/you-dont-have-to-stay-on-top-of-everything": {
            redirect: {
                to: "/stoicism/1/30",
                statusCode: 301
            }
        },
        "/stoicism/philosophy-as-medicine-for-the-soul": {
            redirect: {
                to: "/stoicism/1/31",
                statusCode: 301
            }
        },
        "/stoicism/for-the-hot-headed-man": {
            redirect: {
                to: "/stoicism/2/1",
                statusCode: 301
            }
        },
        "/stoicism/a-proper-frame-of-mind": {
            redirect: {
                to: "/stoicism/2/2",
                statusCode: 301
            }
        },
        "/stoicism/the-source-of-your-anxiety": {
            redirect: {
                to: "/stoicism/2/3",
                statusCode: 301
            }
        },
        "/stoicism/on-being-invincible": {
            redirect: {
                to: "/stoicism/2/4",
                statusCode: 301
            }
        },
        "/stoicism/steady-your-impulses": {
            redirect: {
                to: "/stoicism/2/5",
                statusCode: 301
            }
        },
        "/stoicism/dont-seek-out-strife": {
            redirect: {
                to: "/stoicism/2/6",
                statusCode: 301
            }
        },
        "/stoicism/fear-is-a-self-fulfilling-prophecy": {
            redirect: {
                to: "/stoicism/2/7",
                statusCode: 301
            }
        },
        "/stoicism/did-that-make-you-feel-better": {
            redirect: {
                to: "/stoicism/2/8",
                statusCode: 301
            }
        },
        "/stoicism/you-dont-have-to-have-an-opinion": {
            redirect: {
                to: "/stoicism/2/9",
                statusCode: 301
            }
        },
        "/stoicism/you-do-not-have-to-have-an-opinion": {
            redirect: {
                to: "/stoicism/2/9",
                statusCode: 301
            }
        },
        "/stoicism/anger-is-bad-fuel": {
            redirect: {
                to: "/stoicism/2/10",
                statusCode: 301
            }
        },
        "/stoicism/hero-or-nero": {
            redirect: {
                to: "/stoicism/2/11",
                statusCode: 301
            }
        },
        "/stoicism/protect-your-peace-of-mind": {
            redirect: {
                to: "/stoicism/2/12",
                statusCode: 301
            }
        },
        "/stoicism/pleasure-can-become-punishment": {
            redirect: {
                to: "/stoicism/2/13",
                statusCode: 301
            }
        },
        "/stoicism/think-before-you-act": {
            redirect: {
                to: "/stoicism/2/14",
                statusCode: 301
            }
        },
        "/stoicism/only-bad-dreams": {
            redirect: {
                to: "/stoicism/2/15",
                statusCode: 301
            }
        },
        "/stoicism/dont-make-things-harder-than-they-need-to-be": {
            redirect: {
                to: "/stoicism/2/16",
                statusCode: 301
            }
        },
        "/stoicism/do-not-make-things-harder-than-they-need-to-be": {
            redirect: {
                to: "/stoicism/2/16",
                statusCode: 301
            }
        },
        "/stoicism/the-enemy-of-happiness": {
            redirect: {
                to: "/stoicism/2/17",
                statusCode: 301
            }
        },
        "/stoicism/prepare-for-the-storm": {
            redirect: {
                to: "/stoicism/2/18",
                statusCode: 301
            }
        },
        "/stoicism/the-banquet-of-life": {
            redirect: {
                to: "/stoicism/2/19",
                statusCode: 301
            }
        },
        "/stoicism/the-grand-parade-of-desire": {
            redirect: {
                to: "/stoicism/2/20",
                statusCode: 301
            }
        },
        "/stoicism/wish-not-want-not": {
            redirect: {
                to: "/stoicism/2/21",
                statusCode: 301
            }
        },
        "/stoicism/whats-better-left-unsaid": {
            redirect: {
                to: "/stoicism/2/22",
                statusCode: 301
            }
        },
        "/stoicism/what-is-better-left-unsaid": {
            redirect: {
                to: "/stoicism/2/22",
                statusCode: 301
            }
        },
        "/stoicism/circumstances-have-no-care-for-our-feelings": {
            redirect: {
                to: "/stoicism/2/23",
                statusCode: 301
            }
        },
        "/stoicism/the-real-source-of-harm": {
            redirect: {
                to: "/stoicism/2/24",
                statusCode: 301
            }
        },
        "/stoicism/the-smoke-and-dust-of-myth": {
            redirect: {
                to: "/stoicism/2/25",
                statusCode: 301
            }
        },
        "/stoicism/to-each-his-own": {
            redirect: {
                to: "/stoicism/2/26",
                statusCode: 301
            }
        },
        "/stoicism/cultivating-indifference-where-others-grow-passion": {
            redirect: {
                to: "/stoicism/2/27",
                statusCode: 301
            }
        },
        "/stoicism/when-you-lose-control": {
            redirect: {
                to: "/stoicism/2/28",
                statusCode: 301
            }
        },
        "/stoicism/you-cant-always-be-getting-what-you-want": {
            redirect: {
                to: "/stoicism/2/28",
                statusCode: 301
            }
        },
        "/stoicism/where-philosophy-begins": {
            redirect: {
                to: "/stoicism/3/1",
                statusCode: 301
            }
        },
        "/stoicism/accurate-self-assessment": {
            redirect: {
                to: "/stoicism/3/2",
                statusCode: 301
            }
        },
        "/stoicism/disintegration": {
            redirect: {
                to: "/stoicism/3/3",
                statusCode: 301
            }
        },
        "/stoicism/awareness-is-freedom": {
            redirect: {
                to: "/stoicism/3/4",
                statusCode: 301
            }
        },
        "/stoicism/cutting-back-on-the-costly": {
            redirect: {
                to: "/stoicism/3/5",
                statusCode: 301
            }
        },
        "/stoicism/dont-tell-yourself-stories": {
            redirect: {
                to: "/stoicism/3/6",
                statusCode: 301
            }
        },
        "/stoicism/dont-trust-the-senses": {
            redirect: {
                to: "/stoicism/3/7",
                statusCode: 301
            }
        },
        "/stoicism/do-not-trust-the-senses": {
            redirect: {
                to: "/stoicism/3/7",
                statusCode: 301
            }
        },
        "/stoicism/dont-unintentionally-hand-over-your-freedom": {
            redirect: {
                to: "/stoicism/3/8",
                statusCode: 301
            }
        },
        "/stoicism/do-not-unintentionally-hand-over-your-freedom": {
            redirect: {
                to: "/stoicism/3/8",
                statusCode: 301
            }
        },
        "/stoicism/find-the-right-scene": {
            redirect: {
                to: "/stoicism/3/9",
                statusCode: 301
            }
        },
        "/stoicism/find-yourself-a-cato": {
            redirect: {
                to: "/stoicism/3/10",
                statusCode: 301
            }
        },
        "/stoicism/living-without-restriction": {
            redirect: {
                to: "/stoicism/3/11",
                statusCode: 301
            }
        },
        "/stoicism/seeing-things-as-the-person-at-fault-does": {
            redirect: {
                to: "/stoicism/3/12",
                statusCode: 301
            }
        },
        "/stoicism/one-day-it-will-all-make-sense": {
            redirect: {
                to: "/stoicism/3/13",
                statusCode: 301
            }
        },
        "/stoicism/self-deception-is-our-enemy": {
            redirect: {
                to: "/stoicism/3/14",
                statusCode: 301
            }
        },
        "/stoicism/the-present-is-all-we-possess": {
            redirect: {
                to: "/stoicism/3/15",
                statusCode: 301
            }
        },
        "/stoicism/that-sacred-part-of-you": {
            redirect: {
                to: "/stoicism/3/16",
                statusCode: 301
            }
        },
        "/stoicism/the-beauty-of-choice": {
            redirect: {
                to: "/stoicism/3/17",
                statusCode: 301
            }
        },
        "/stoicism/impossible-without-your-consent": {
            redirect: {
                to: "/stoicism/3/18",
                statusCode: 301
            }
        },
        "/stoicism/timeless-wisdom": {
            redirect: {
                to: "/stoicism/3/19",
                statusCode: 301
            }
        },
        "/stoicism/ready-and-at-home": {
            redirect: {
                to: "/stoicism/3/20",
                statusCode: 301
            }
        },
        "/stoicism/the-best-retreat-is-in-here-not-out-there": {
            redirect: {
                to: "/stoicism/3/21",
                statusCode: 301
            }
        },
        "/stoicism/the-sign-of-true-education": {
            redirect: {
                to: "/stoicism/3/22",
                statusCode: 301
            }
        },
        "/stoicism/the-straightjacketed-soul": {
            redirect: {
                to: "/stoicism/3/23",
                statusCode: 301
            }
        },
        "/stoicism/there-is-philosophy-in-everything": {
            redirect: {
                to: "/stoicism/3/24",
                statusCode: 301
            }
        },
        "/stoicism/wealth-and-freedom-are-free": {
            redirect: {
                to: "/stoicism/3/25",
                statusCode: 301
            }
        },
        "/stoicism/what-rules-your-ruling-reason": {
            redirect: {
                to: "/stoicism/3/26",
                statusCode: 301
            }
        },
        "/stoicism/pay-what-things-are-worth": {
            redirect: {
                to: "/stoicism/3/27",
                statusCode: 301
            }
        },
        "/stoicism/cowardice-as-a-design-problem": {
            redirect: {
                to: "/stoicism/3/28",
                statusCode: 301
            }
        },
        "/stoicism/why-do-you-need-to-impress-these-people-again": {
            redirect: {
                to: "/stoicism/3/29",
                statusCode: 301
            }
        },
        "/stoicism/reason-in-all-things": {
            redirect: {
                to: "/stoicism/3/30",
                statusCode: 301
            }
        },
        "/stoicism/youre-a-product-of-your-training": {
            redirect: {
                to: "/stoicism/3/31",
                statusCode: 301
            }
        },
        "/stoicism/the-color-of-your-thoughts": {
            redirect: {
                to: "/stoicism/4/1",
                statusCode: 301
            }
        },
        "/stoicism/be-wary-of-what-you-let-in": {
            redirect: {
                to: "/stoicism/4/2",
                statusCode: 301
            }
        },
        "/stoicism/deceived-and-divided": {
            redirect: {
                to: "/stoicism/4/3",
                statusCode: 301
            }
        },
        "/stoicism/dont-let-this-go-to-your-head": {
            redirect: {
                to: "/stoicism/4/4",
                statusCode: 301
            }
        },
        "/stoicism/do-not-let-this-go-to-your-head": {
            redirect: {
                to: "/stoicism/4/4",
                statusCode: 301
            }
        },
        "/stoicism/trust-but-verify": {
            redirect: {
                to: "/stoicism/4/5",
                statusCode: 301
            }
        },
        "/stoicism/prepare-yourself-for-negativity": {
            redirect: {
                to: "/stoicism/4/6",
                statusCode: 301
            }
        },
        "/stoicism/expect-to-change-your-opinions": {
            redirect: {
                to: "/stoicism/4/7",
                statusCode: 301
            }
        },
        "/stoicism/the-cost-of-accepting-counterfeits": {
            redirect: {
                to: "/stoicism/4/8",
                statusCode: 301
            }
        },
        "/stoicism/test-your-impressions": {
            redirect: {
                to: "/stoicism/4/9",
                statusCode: 301
            }
        },
        "/stoicism/judgements-cause-disturbance": {
            redirect: {
                to: "/stoicism/4/10",
                statusCode: 301
            }
        },
        "/stoicism/if-you-want-to-learn-be-humble": {
            redirect: {
                to: "/stoicism/4/11",
                statusCode: 301
            }
        },
        "/stoicism/reject-tantalizing-gifts": {
            redirect: {
                to: "/stoicism/4/12",
                statusCode: 301
            }
        },
        "/stoicism/less-is-more": {
            redirect: {
                to: "/stoicism/4/13",
                statusCode: 301
            }
        },
        "/stoicism/becoming-an-expert-in-what-matters": {
            redirect: {
                to: "/stoicism/4/14",
                statusCode: 301
            }
        },
        "/stoicism/pay-your-taxes": {
            redirect: {
                to: "/stoicism/4/15",
                statusCode: 301
            }
        },
        "/stoicism/observe-cause-and-effect": {
            redirect: {
                to: "/stoicism/4/16",
                statusCode: 301
            }
        },
        "/stoicism/no-harm-no-foul": {
            redirect: {
                to: "/stoicism/4/17",
                statusCode: 301
            }
        },
        "/stoicism/opinions-are-like-": {
            redirect: {
                to: "/stoicism/4/18",
                statusCode: 301
            }
        },
        "/stoicism/our-sphere-of-impulses": {
            redirect: {
                to: "/stoicism/4/19",
                statusCode: 301
            }
        },
        "/stoicism/real-good-is-simple": {
            redirect: {
                to: "/stoicism/4/20",
                statusCode: 301
            }
        },
        "/stoicism/dont-let-your-attention-slide": {
            redirect: {
                to: "/stoicism/4/21",
                statusCode: 301
            }
        },
        "/stoicism/the-marks-of-a-rational-person": {
            redirect: {
                to: "/stoicism/4/22",
                statusCode: 301
            }
        },
        "/stoicism/the-mind-is-all-yours": {
            redirect: {
                to: "/stoicism/4/23",
                statusCode: 301
            }
        },
        "/stoicism/a-productive-use-for-contempt": {
            redirect: {
                to: "/stoicism/4/24",
                statusCode: 301
            }
        },
        "/stoicism/theres-nothing-wrong-with-being-wrong": {
            redirect: {
                to: "/stoicism/4/25",
                statusCode: 301
            }
        },
        "/stoicism/things-happen-in-training": {
            redirect: {
                to: "/stoicism/4/26",
                statusCode: 301
            }
        },
        "/stoicism/turn-it-inside-out": {
            redirect: {
                to: "/stoicism/4/27",
                statusCode: 301
            }
        },
        "/stoicism/wants-make-you-a-servant": {
            redirect: {
                to: "/stoicism/4/28",
                statusCode: 301
            }
        },
        "/stoicism/washing-away-the-dust-of-life": {
            redirect: {
                to: "/stoicism/4/29",
                statusCode: 301
            }
        },
        "/stoicism/what-is-in-keeping-with-your-character": {
            redirect: {
                to: "/stoicism/4/30",
                statusCode: 301
            }
        },
        "/stoicism/make-character-your-loudest-statement": {
            redirect: {
                to: "/stoicism/5/1",
                statusCode: 301
            }
        },
        "/stoicism/be-the-person-you-want-to-be": {
            redirect: {
                to: "/stoicism/5/2",
                statusCode: 301
            }
        },
        "/stoicism/show-not-tell-what-you-know": {
            redirect: {
                to: "/stoicism/5/3",
                statusCode: 301
            }
        },
        "/stoicism/whats-truly-impressive": {
            redirect: {
                to: "/stoicism/5/4",
                statusCode: 301
            }
        },
        "/stoicism/you-are-the-project": {
            redirect: {
                to: "/stoicism/5/5",
                statusCode: 301
            }
        },
        "/stoicism/righteousness-is-beautiful": {
            redirect: {
                to: "/stoicism/5/6",
                statusCode: 301
            }
        },
        "/stoicism/how-to-have-a-good-day": {
            redirect: {
                to: "/stoicism/5/7",
                statusCode: 301
            }
        },
        "/stoicism/good-and-evil-look-at-your-choices": {
            redirect: {
                to: "/stoicism/5/8",
                statusCode: 301
            }
        },
        "/stoicism/carpe-diem": {
            redirect: {
                to: "/stoicism/5/9",
                statusCode: 301
            }
        },
        "/stoicism/dont-be-inspired-be-inspirational": {
            redirect: {
                to: "/stoicism/5/10",
                statusCode: 301
            }
        },
        "/stoicism/do-not-be-inspired-be-inspirational": {
            redirect: {
                to: "/stoicism/5/10",
                statusCode: 301
            }
        },
        "/stoicism/guilt-is-worse-than-jail": {
            redirect: {
                to: "/stoicism/5/11",
                statusCode: 301
            }
        },
        "/stoicism/kindness-is-always-the-right-response": {
            redirect: {
                to: "/stoicism/5/12",
                statusCode: 301
            }
        },
        "/stoicism/fueling-the-habit-bonfire": {
            redirect: {
                to: "/stoicism/5/13",
                statusCode: 301
            }
        },
        "/stoicism/our-well-being-lies-in-our-actions": {
            redirect: {
                to: "/stoicism/5/14",
                statusCode: 301
            }
        },
        "/stoicism/count-your-blessings": {
            redirect: {
                to: "/stoicism/5/15",
                statusCode: 301
            }
        },
        "/stoicism/the-chain-method": {
            redirect: {
                to: "/stoicism/5/16",
                statusCode: 301
            }
        },
        "/stoicism/the-stoic-is-a-work-in-progress": {
            redirect: {
                to: "/stoicism/5/17",
                statusCode: 301
            }
        },
        "/stoicism/how-you-do-anything-is-how-you-do-everything": {
            redirect: {
                to: "/stoicism/5/18",
                statusCode: 301
            }
        },
        "/stoicism/learn-practice-train": {
            redirect: {
                to: "/stoicism/5/19",
                statusCode: 301
            }
        },
        "/stoicism/quality-over-quantity": {
            redirect: {
                to: "/stoicism/5/20",
                statusCode: 301
            }
        },
        "/stoicism/what-kind-of-boxer-are-you": {
            redirect: {
                to: "/stoicism/5/21",
                statusCode: 301
            }
        },
        "/stoicism/today-is-the-day": {
            redirect: {
                to: "/stoicism/5/22",
                statusCode: 301
            }
        },
        "/stoicism/show-me-how-to-live": {
            redirect: {
                to: "/stoicism/5/23",
                statusCode: 301
            }
        },
        "/stoicism/making-your-own-good-fortune": {
            redirect: {
                to: "/stoicism/5/24",
                statusCode: 301
            }
        },
        "/stoicism/where-to-find-joy": {
            redirect: {
                to: "/stoicism/5/25",
                statusCode: 301
            }
        },
        "/stoicism/stop-caring-what-people-think": {
            redirect: {
                to: "/stoicism/5/26",
                statusCode: 301
            }
        },
        "/stoicism/sweat-the-small-stuff": {
            redirect: {
                to: "/stoicism/5/27",
                statusCode: 301
            }
        },
        "/stoicism/the-first-two-things-before-acting": {
            redirect: {
                to: "/stoicism/5/28",
                statusCode: 301
            }
        },
        "/stoicism/work-is-therapy": {
            redirect: {
                to: "/stoicism/5/29",
                statusCode: 301
            }
        },
        "/stoicism/working-hard-or-hardly-working": {
            redirect: {
                to: "/stoicism/5/30",
                statusCode: 301
            }
        },
        "/stoicism/we-have-but-one-obligation": {
            redirect: {
                to: "/stoicism/5/31",
                statusCode: 301
            }
        },
        "/stoicism/always-have-a-mental-reverse-clause": {
            redirect: {
                to: "/stoicism/6/1",
                statusCode: 301
            }
        },
        "/stoicism/platos-view": {
            redirect: {
                to: "/stoicism/6/2",
                statusCode: 301
            }
        },
        "/stoicism/it-is-well-to-be-flexible": {
            redirect: {
                to: "/stoicism/6/3",
                statusCode: 301
            }
        },
        "/stoicism/this-is-what-were-here-for": {
            redirect: {
                to: "/stoicism/6/4",
                statusCode: 301
            }
        },
        "/stoicism/this-is-what-we-are-here-for": {
            redirect: {
                to: "/stoicism/6/4",
                statusCode: 301
            }
        },
        "/stoicism/blow-your-own-nose": {
            redirect: {
                to: "/stoicism/6/5",
                statusCode: 301
            }
        },
        "/stoicism/when-to-stick-and-when-to-quit": {
            redirect: {
                to: "/stoicism/6/6",
                statusCode: 301
            }
        },
        "/stoicism/finding-the-right-mentors": {
            redirect: {
                to: "/stoicism/6/7",
                statusCode: 301
            }
        },
        "/stoicism/brick-by-boring-brick": {
            redirect: {
                to: "/stoicism/6/8",
                statusCode: 301
            }
        },
        "/stoicism/solve-problems-early": {
            redirect: {
                to: "/stoicism/6/9",
                statusCode: 301
            }
        },
        "/stoicism/you-can-do-it": {
            redirect: {
                to: "/stoicism/6/10",
                statusCode: 301
            }
        },
        "/stoicism/just-dont-make-things-worse": {
            redirect: {
                to: "/stoicism/6/11",
                statusCode: 301
            }
        },
        "/stoicism/a-trained-mind-is-better-than-any-script": {
            redirect: {
                to: "/stoicism/6/12",
                statusCode: 301
            }
        },
        "/stoicism/life-is-a-battlefield": {
            redirect: {
                to: "/stoicism/6/13",
                statusCode: 301
            }
        },
        "/stoicism/try-the-other-handle": {
            redirect: {
                to: "/stoicism/6/14",
                statusCode: 301
            }
        },
        "/stoicism/listening-accomplishes-more-than-speaking": {
            redirect: {
                to: "/stoicism/6/15",
                statusCode: 301
            }
        },
        "/stoicism/no-shame-in-needing-help": {
            redirect: {
                to: "/stoicism/6/16",
                statusCode: 301
            }
        },
        "/stoicism/offense-or-defense": {
            redirect: {
                to: "/stoicism/6/17",
                statusCode: 301
            }
        },
        "/stoicism/prepared-and-active": {
            redirect: {
                to: "/stoicism/6/18",
                statusCode: 301
            }
        },
        "/stoicism/stay-focused-on-the-present": {
            redirect: {
                to: "/stoicism/6/19",
                statusCode: 301
            }
        },
        "/stoicism/calm-is-contagious": {
            redirect: {
                to: "/stoicism/6/20",
                statusCode: 301
            }
        },
        "/stoicism/take-a-walk": {
            redirect: {
                to: "/stoicism/6/21",
                statusCode: 301
            }
        },
        "/stoicism/the-definition-of-insanity": {
            redirect: {
                to: "/stoicism/6/22",
                statusCode: 301
            }
        },
        "/stoicism/the-long-way-around": {
            redirect: {
                to: "/stoicism/6/23",
                statusCode: 301
            }
        },
        "/stoicism/the-truly-educated-arent-quarrelsome": {
            redirect: {
                to: "/stoicism/6/24",
                statusCode: 301
            }
        },
        "/stoicism/the-wise-dont-have-problems": {
            redirect: {
                to: "/stoicism/6/25",
                statusCode: 301
            }
        },
        "/stoicism/the-wise-do-not-have-problems": {
            redirect: {
                to: "/stoicism/6/25",
                statusCode: 301
            }
        },
        "/stoicism/try-the-opposite": {
            redirect: {
                to: "/stoicism/6/26",
                statusCode: 301
            }
        },
        "/stoicism/adversity-reveals": {
            redirect: {
                to: "/stoicism/6/27",
                statusCode: 301
            }
        },
        "/stoicism/no-self-flagellation-needed": {
            redirect: {
                to: "/stoicism/6/28",
                statusCode: 301
            }
        },
        "/stoicism/no-excuses": {
            redirect: {
                to: "/stoicism/6/29",
                statusCode: 301
            }
        },
        "/stoicism/the-obstacle-is-the-way": {
            redirect: {
                to: "/stoicism/6/30",
                statusCode: 301
            }
        },
        "/stoicism/do-your-job": {
            redirect: {
                to: "/stoicism/7/1",
                statusCode: 301
            }
        },
        "/stoicism/on-duty-and-circumstance": {
            redirect: {
                to: "/stoicism/7/2",
                statusCode: 301
            }
        },
        "/stoicism/turn-have-to-into-get-to": {
            redirect: {
                to: "/stoicism/7/3",
                statusCode: 301
            }
        },
        "/stoicism/protect-the-flame": {
            redirect: {
                to: "/stoicism/7/4",
                statusCode: 301
            }
        },
        "/stoicism/no-one-said-itd-be-easy": {
            redirect: {
                to: "/stoicism/7/5",
                statusCode: 301
            }
        },
        "/stoicism/no-one-said-it-would-be-easy": {
            redirect: {
                to: "/stoicism/7/5",
                statusCode: 301
            }
        },
        "/stoicism/rise-and-shine": {
            redirect: {
                to: "/stoicism/7/6",
                statusCode: 301
            }
        },
        "/stoicism/our-duty-to-learn": {
            redirect: {
                to: "/stoicism/7/7",
                statusCode: 301
            }
        },
        "/stoicism/stop-monkeying-around": {
            redirect: {
                to: "/stoicism/7/8",
                statusCode: 301
            }
        },
        "/stoicism/the-philosopher-king": {
            redirect: {
                to: "/stoicism/7/9",
                statusCode: 301
            }
        },
        "/stoicism/love-the-humble-art": {
            redirect: {
                to: "/stoicism/7/10",
                statusCode: 301
            }
        },
        "/stoicism/the-start-up-of-you": {
            redirect: {
                to: "/stoicism/7/11",
                statusCode: 301
            }
        },
        "/stoicism/some-simple-rules": {
            redirect: {
                to: "/stoicism/7/12",
                statusCode: 301
            }
        },
        "/stoicism/a-leader-leads": {
            redirect: {
                to: "/stoicism/7/13",
                statusCode: 301
            }
        },
        "/stoicism/a-little-knowledge-is-dangerous": {
            redirect: {
                to: "/stoicism/7/14",
                statusCode: 301
            }
        },
        "/stoicism/doing-the-right-thing-is-enough": {
            redirect: {
                to: "/stoicism/7/15",
                statusCode: 301
            }
        },
        "/stoicism/progress-of-the-soul": {
            redirect: {
                to: "/stoicism/7/16",
                statusCode: 301
            }
        },
        "/stoicism/dont-abandon-others-or-yourself": {
            redirect: {
                to: "/stoicism/7/17",
                statusCode: 301
            }
        },
        "/stoicism/do-not-abandon-others-or-yourself": {
            redirect: {
                to: "/stoicism/7/17",
                statusCode: 301
            }
        },
        "/stoicism/each-the-master-of-their-own-domain": {
            redirect: {
                to: "/stoicism/7/18",
                statusCode: 301
            }
        },
        "/stoicism/forgive-them-because-they-dont-know": {
            redirect: {
                to: "/stoicism/7/19",
                statusCode: 301
            }
        },
        "/stoicism/made-for-justice": {
            redirect: {
                to: "/stoicism/7/20",
                statusCode: 301
            }
        },
        "/stoicism/made-for-working-together": {
            redirect: {
                to: "/stoicism/7/21",
                statusCode: 301
            }
        },
        "/stoicism/no-one-has-a-gun-to-your-head": {
            redirect: {
                to: "/stoicism/7/22",
                statusCode: 301
            }
        },
        "/stoicism/receive-honors-and-slights-exactly-the-same-way": {
            redirect: {
                to: "/stoicism/7/23",
                statusCode: 301
            }
        },
        "/stoicism/somewhere-someones-dying": {
            redirect: {
                to: "/stoicism/7/24",
                statusCode: 301
            }
        },
        "/stoicism/whats-on-your-tombstone": {
            redirect: {
                to: "/stoicism/7/25",
                statusCode: 301
            }
        },
        "/stoicism/what-is-on-your-tombstone": {
            redirect: {
                to: "/stoicism/7/25",
                statusCode: 301
            }
        },
        "/stoicism/when-good-men-do-nothing": {
            redirect: {
                to: "/stoicism/7/26",
                statusCode: 301
            }
        },
        "/stoicism/where-is-anything-better": {
            redirect: {
                to: "/stoicism/7/27",
                statusCode: 301
            }
        },
        "/stoicism/check-your-privilege": {
            redirect: {
                to: "/stoicism/7/28",
                statusCode: 301
            }
        },
        "/stoicism/a-cure-for-the-self": {
            redirect: {
                to: "/stoicism/7/29",
                statusCode: 301
            }
        },
        "/stoicism/stoic-joy": {
            redirect: {
                to: "/stoicism/7/30",
                statusCode: 301
            }
        },
        "/stoicism/your-career-is-not-a-life-sentence": {
            redirect: {
                to: "/stoicism/7/31",
                statusCode: 301
            }
        },
        "/stoicism/dont-go-expecting-perfection": {
            redirect: {
                to: "/stoicism/8/1",
                statusCode: 301
            }
        },
        "/stoicism/we-can-work-any-way": {
            redirect: {
                to: "/stoicism/8/2",
                statusCode: 301
            }
        },
        "/stoicism/the-good-life-is-anywhere": {
            redirect: {
                to: "/stoicism/8/3",
                statusCode: 301
            }
        },
        "/stoicism/no-blame-just-focus": {
            redirect: {
                to: "/stoicism/8/4",
                statusCode: 301
            }
        },
        "/stoicism/silence-is-strength": {
            redirect: {
                to: "/stoicism/8/5",
                statusCode: 301
            }
        },
        "/stoicism/there-is-always-more-room-to-maneuver-than-you-think": {
            redirect: {
                to: "/stoicism/8/6",
                statusCode: 301
            }
        },
        "/stoicism/pragmatic-and-principled": {
            redirect: {
                to: "/stoicism/8/7",
                statusCode: 301
            }
        },
        "/stoicism/start-with-where-the-world-is": {
            redirect: {
                to: "/stoicism/8/8",
                statusCode: 301
            }
        },
        "/stoicism/stick-with-just-the-facts": {
            redirect: {
                to: "/stoicism/8/9",
                statusCode: 301
            }
        },
        "/stoicism/perfection-is-the-enemy-of-action": {
            redirect: {
                to: "/stoicism/8/10",
                statusCode: 301
            }
        },
        "/stoicism/no-time-for-theories-just-results": {
            redirect: {
                to: "/stoicism/8/11",
                statusCode: 301
            }
        },
        "/stoicism/make-the-words-your-own": {
            redirect: {
                to: "/stoicism/8/12",
                statusCode: 301
            }
        },
        "/stoicism/take-charge-and-end-your-troubles": {
            redirect: {
                to: "/stoicism/8/13",
                statusCode: 301
            }
        },
        "/stoicism/this-isnt-for-fun-its-for-life": {
            redirect: {
                to: "/stoicism/8/14",
                statusCode: 301
            }
        },
        "/stoicism/the-supreme-court-of-your-mind": {
            redirect: {
                to: "/stoicism/8/15",
                statusCode: 301
            }
        },
        "/stoicism/anything-can-be-an-advantage": {
            redirect: {
                to: "/stoicism/8/16",
                statusCode: 301
            }
        },
        "/stoicism/the-buck-stops-here": {
            redirect: {
                to: "/stoicism/8/17",
                statusCode: 301
            }
        },
        "/stoicism/only-fools-rush-in": {
            redirect: {
                to: "/stoicism/8/18",
                statusCode: 301
            }
        },
        "/stoicism/corralling-the-unnecessary": {
            redirect: {
                to: "/stoicism/8/19",
                statusCode: 301
            }
        },
        "/stoicism/where-it-counts": {
            redirect: {
                to: "/stoicism/8/20",
                statusCode: 301
            }
        },
        "/stoicism/dont-be-miserable-in-advance": {
            redirect: {
                to: "/stoicism/8/21",
                statusCode: 301
            }
        },
        "/stoicism/dont-sweat-the-small-stuff": {
            redirect: {
                to: "/stoicism/8/22",
                statusCode: 301
            }
        },
        "/stoicism/its-in-your-self-interest": {
            redirect: {
                to: "/stoicism/8/23",
                statusCode: 301
            }
        },
        "/stoicism/pillage-from-all-sources": {
            redirect: {
                to: "/stoicism/8/24",
                statusCode: 301
            }
        },
        "/stoicism/respect-the-past-but-be-open-to-the-future": {
            redirect: {
                to: "/stoicism/8/25",
                statusCode: 301
            }
        },
        "/stoicism/seeking-out-shipwrecks": {
            redirect: {
                to: "/stoicism/8/26",
                statusCode: 301
            }
        },
        "/stoicism/laugh-or-cry": {
            redirect: {
                to: "/stoicism/8/27",
                statusCode: 301
            }
        },
        "/stoicism/the-opulent-stoic": {
            redirect: {
                to: "/stoicism/8/28",
                statusCode: 301
            }
        },
        "/stoicism/want-nothing-have-everything": {
            redirect: {
                to: "/stoicism/8/29",
                statusCode: 301
            }
        },
        "/stoicism/when-you-feel-lazy": {
            redirect: {
                to: "/stoicism/8/30",
                statusCode: 301
            }
        },
        "/stoicism/consider-your-failings-too": {
            redirect: {
                to: "/stoicism/8/31",
                statusCode: 301
            }
        },
        "/stoicism/a-strong-soul-is-better-than-good-luck": {
            redirect: {
                to: "/stoicism/9/1",
                statusCode: 301
            }
        },
        "/stoicism/the-philosophers-school-is-a-hospital": {
            redirect: {
                to: "/stoicism/9/2",
                statusCode: 301
            }
        },
        "/stoicism/first-a-hard-winter-training": {
            redirect: {
                to: "/stoicism/9/3",
                statusCode: 301
            }
        },
        "/stoicism/how-can-you-know-if-youve-never-been-tested": {
            redirect: {
                to: "/stoicism/9/4",
                statusCode: 301
            }
        },
        "/stoicism/how-can-you-know-if-you-have-never-been-tested": {
            redirect: {
                to: "/stoicism/9/4",
                statusCode: 301
            }
        },
        "/stoicism/focus-on-what-is-yours-alone": {
            redirect: {
                to: "/stoicism/9/5",
                statusCode: 301
            }
        },
        "/stoicism/they-can-throw-you-in-chains-but": {
            redirect: {
                to: "/stoicism/9/6",
                statusCode: 301
            }
        },
        "/stoicism/our-hidden-power": {
            redirect: {
                to: "/stoicism/9/7",
                statusCode: 301
            }
        },
        "/stoicism/do-not-be-deceived-by-fortune": {
            redirect: {
                to: "/stoicism/9/8",
                statusCode: 301
            }
        },
        "/stoicism/nothing-to-fear-but-fear-itself": {
            redirect: {
                to: "/stoicism/9/9",
                statusCode: 301
            }
        },
        "/stoicism/preparing-on-the-sunny-day": {
            redirect: {
                to: "/stoicism/9/10",
                statusCode: 301
            }
        },
        "/stoicism/what-would-less-look-like": {
            redirect: {
                to: "/stoicism/9/11",
                statusCode: 301
            }
        },
        "/stoicism/be-down-to-earth-or-be-brought-down": {
            redirect: {
                to: "/stoicism/9/12",
                statusCode: 301
            }
        },
        "/stoicism/protecting-our-inner-fortress-from-fear": {
            redirect: {
                to: "/stoicism/9/13",
                statusCode: 301
            }
        },
        "/stoicism/a-different-way-to-pray": {
            redirect: {
                to: "/stoicism/9/14",
                statusCode: 301
            }
        },
        "/stoicism/a-garden-is-not-for-show": {
            redirect: {
                to: "/stoicism/9/15",
                statusCode: 301
            }
        },
        "/stoicism/anyone-can-get-lucky-not-everyone-can-persevere": {
            redirect: {
                to: "/stoicism/9/16",
                statusCode: 301
            }
        },
        "/stoicism/dealing-with-haters": {
            redirect: {
                to: "/stoicism/9/17",
                statusCode: 301
            }
        },
        "/stoicism/dealing-with-pain": {
            redirect: {
                to: "/stoicism/9/18",
                statusCode: 301
            }
        },
        "/stoicism/flexibility-of-the-will": {
            redirect: {
                to: "/stoicism/9/19",
                statusCode: 301
            }
        },
        "/stoicism/life-isnt-a-dance": {
            redirect: {
                to: "/stoicism/9/20",
                statusCode: 301
            }
        },
        "/stoicism/maintain-composure-maintain-control": {
            redirect: {
                to: "/stoicism/9/21",
                statusCode: 301
            }
        },
        "/stoicism/no-pain-no-gain": {
            redirect: {
                to: "/stoicism/9/22",
                statusCode: 301
            }
        },
        "/stoicism/the-most-secure-fortress": {
            redirect: {
                to: "/stoicism/9/23",
                statusCode: 301
            }
        },
        "/stoicism/it-could-happen-to-you": {
            redirect: {
                to: "/stoicism/9/24",
                statusCode: 301
            }
        },
        "/stoicism/the-vulnerability-of-dependence": {
            redirect: {
                to: "/stoicism/9/25",
                statusCode: 301
            }
        },
        "/stoicism/what-time-off-is-for": {
            redirect: {
                to: "/stoicism/9/26",
                statusCode: 301
            }
        },
        "/stoicism/what-will-prosperity-reveal": {
            redirect: {
                to: "/stoicism/9/27",
                statusCode: 301
            }
        },
        "/stoicism/you-hold-the-trump-card": {
            redirect: {
                to: "/stoicism/9/28",
                statusCode: 301
            }
        },
        "/stoicism/your-actual-needs-are-small": {
            redirect: {
                to: "/stoicism/9/29",
                statusCode: 301
            }
        },
        "/stoicism/you-cant-touch-me": {
            redirect: {
                to: "/stoicism/9/30",
                statusCode: 301
            }
        },
        "/stoicism/let-virtue-shine-bright": {
            redirect: {
                to: "/stoicism/10/1",
                statusCode: 301
            }
        },
        "/stoicism/the-most-valuable-asset": {
            redirect: {
                to: "/stoicism/10/2",
                statusCode: 301
            }
        },
        "/stoicism/a-mantra-of-mutual-interdependence": {
            redirect: {
                to: "/stoicism/10/3",
                statusCode: 301
            }
        },
        "/stoicism/all-for-one-one-for-all": {
            redirect: {
                to: "/stoicism/10/4",
                statusCode: 301
            }
        },
        "/stoicism/words-cant-be-unsaid": {
            redirect: {
                to: "/stoicism/10/5",
                statusCode: 301
            }
        },
        "/stoicism/looking-out-for-each-other": {
            redirect: {
                to: "/stoicism/10/6",
                statusCode: 301
            }
        },
        "/stoicism/a-selfish-reason-to-be-good": {
            redirect: {
                to: "/stoicism/10/7",
                statusCode: 301
            }
        },
        "/stoicism/a-higher-pleasure": {
            redirect: {
                to: "/stoicism/10/8",
                statusCode: 301
            }
        },
        "/stoicism/set-the-standards-and-use-them": {
            redirect: {
                to: "/stoicism/10/9",
                statusCode: 301
            }
        },
        "/stoicism/reverence-and-justice": {
            redirect: {
                to: "/stoicism/10/10",
                statusCode: 301
            }
        },
        "/stoicism/honesty-as-our-default": {
            redirect: {
                to: "/stoicism/10/11",
                statusCode: 301
            }
        },
        "/stoicism/always-love": {
            redirect: {
                to: "/stoicism/10/12",
                statusCode: 301
            }
        },
        "/stoicism/revenge-is-a-dish-best-not-served": {
            redirect: {
                to: "/stoicism/NaN/NaN",
                statusCode: 301
            }
        },
        "/stoicism/dont-get-mad-help": {
            redirect: {
                to: "/stoicism/10/14",
                statusCode: 301
            }
        },
        "/stoicism/give-people-the-benefit-of-the-doubt": {
            redirect: {
                to: "/stoicism/10/16",
                statusCode: 301
            }
        },
        "/stoicism/spread-the-word": {
            redirect: {
                to: "/stoicism/10/16",
                statusCode: 301
            }
        },
        "/stoicism/the-benefit-of-kindness": {
            redirect: {
                to: "/stoicism/10/17",
                statusCode: 301
            }
        },
        "/stoicism/frenemies": {
            redirect: {
                to: "/stoicism/10/18",
                statusCode: 301
            }
        },
        "/stoicism/good-habits-drive-out-bad-habits": {
            redirect: {
                to: "/stoicism/10/19",
                statusCode: 301
            }
        },
        "/stoicism/marks-of-the-good-life": {
            redirect: {
                to: "/stoicism/10/20",
                statusCode: 301
            }
        },
        "/stoicism/heroes-here-and-now": {
            redirect: {
                to: "/stoicism/10/21",
                statusCode: 301
            }
        },
        "/stoicism/its-easy-to-get-better-but-better-at-what": {
            redirect: {
                to: "/stoicism/10/22",
                statusCode: 301
            }
        },
        "/stoicism/show-the-qualities-you-were-made-for": {
            redirect: {
                to: "/stoicism/10/23",
                statusCode: 301
            }
        },
        "/stoicism/the-fountain-of-goodness": {
            redirect: {
                to: "/stoicism/10/24",
                statusCode: 301
            }
        },
        "/stoicism/two-tasks": {
            redirect: {
                to: "/stoicism/10/25",
                statusCode: 301
            }
        },
        "/stoicism/three-parts-one-aim": {
            redirect: {
                to: "/stoicism/10/26",
                statusCode: 301
            }
        },
        "/stoicism/we-reap-what-we-sow": {
            redirect: {
                to: "/stoicism/10/27",
                statusCode: 301
            }
        },
        "/stoicism/we-were-made-for-each-other": {
            redirect: {
                to: "/stoicism/10/28",
                statusCode: 301
            }
        },
        "/stoicism/character-is-fate": {
            redirect: {
                to: "/stoicism/10/29",
                statusCode: 301
            }
        },
        "/stoicism/who-gets-the-lions-share": {
            redirect: {
                to: "/stoicism/10/30",
                statusCode: 301
            }
        },
        "/stoicism/you-were-born-good": {
            redirect: {
                to: "/stoicism/10/31",
                statusCode: 301
            }
        },
        "/stoicism/accepting-what-is": {
            redirect: {
                to: "/stoicism/11/1",
                statusCode: 301
            }
        },
        "/stoicism/binding-our-wishes-to-what-will-be": {
            redirect: {
                to: "/stoicism/11/2",
                statusCode: 301
            }
        },
        "/stoicism/following-the-doctors-orders": {
            redirect: {
                to: "/stoicism/11/3",
                statusCode: 301
            }
        },
        "/stoicism/not-good-nor-bad": {
            redirect: {
                to: "/stoicism/11/4",
                statusCode: 301
            }
        },
        "/stoicism/a-higher-power": {
            redirect: {
                to: "/stoicism/11/5",
                statusCode: 301
            }
        },
        "/stoicism/someone-else-is-spinning-the-thread": {
            redirect: {
                to: "/stoicism/11/6",
                statusCode: 301
            }
        },
        "/stoicism/how-to-be-powerful": {
            redirect: {
                to: "/stoicism/11/7",
                statusCode: 301
            }
        },
        "/stoicism/actors-in-a-play": {
            redirect: {
                to: "/stoicism/11/8",
                statusCode: 301
            }
        },
        "/stoicism/all-is-fluid": {
            redirect: {
                to: "/stoicism/11/9",
                statusCode: 301
            }
        },
        "/stoicism/always-the-same": {
            redirect: {
                to: "/stoicism/11/10",
                statusCode: 301
            }
        },
        "/stoicism/its-not-the-thing-its-what-we-make-of-it": {
            redirect: {
                to: "/stoicism/11/11",
                statusCode: 301
            }
        },
        "/stoicism/the-strong-accept-responsibility": {
            redirect: {
                to: "/stoicism/11/12",
                statusCode: 301
            }
        },
        "/stoicism/never-complain-never-explain": {
            redirect: {
                to: "/stoicism/11/13",
                statusCode: 301
            }
        },
        "/stoicism/you-choose-the-outcome": {
            redirect: {
                to: "/stoicism/11/14",
                statusCode: 301
            }
        },
        "/stoicism/everything-is-change": {
            redirect: {
                to: "/stoicism/11/15",
                statusCode: 301
            }
        },
        "/stoicism/hope-and-fear-are-the-same": {
            redirect: {
                to: "/stoicism/11/16",
                statusCode: 301
            }
        },
        "/stoicism/judge-not-lest": {
            redirect: {
                to: "/stoicism/11/17",
                statusCode: 301
            }
        },
        "/stoicism/four-habits-of-the-stoic-mind": {
            redirect: {
                to: "/stoicism/11/18",
                statusCode: 301
            }
        },
        "/stoicism/maxims-from-three-wise-men": {
            redirect: {
                to: "/stoicism/11/19",
                statusCode: 301
            }
        },
        "/stoicism/behold-now-as-ever": {
            redirect: {
                to: "/stoicism/11/20",
                statusCode: 301
            }
        },
        "/stoicism/once-is-enough-once-is-forever": {
            redirect: {
                to: "/stoicism/11/21",
                statusCode: 301
            }
        },
        "/stoicism/the-glass-is-already-broken": {
            redirect: {
                to: "/stoicism/11/22",
                statusCode: 301
            }
        },
        "/stoicism/attachments-are-the-enemy": {
            redirect: {
                to: "/stoicism/11/23",
                statusCode: 301
            }
        },
        "/stoicism/train-to-let-go-of-whats-not-yours": {
            redirect: {
                to: "/stoicism/11/24",
                statusCode: 301
            }
        },
        "/stoicism/funny-how-that-works-out": {
            redirect: {
                to: "/stoicism/11/25",
                statusCode: 301
            }
        },
        "/stoicism/the-altar-of-no-difference": {
            redirect: {
                to: "/stoicism/11/26",
                statusCode: 301
            }
        },
        "/stoicism/the-pleasure-of-tuning-out-the-negative": {
            redirect: {
                to: "/stoicism/11/27",
                statusCode: 301
            }
        },
        "/stoicism/its-not-on-them-its-on-you": {
            redirect: {
                to: "/stoicism/11/28",
                statusCode: 301
            }
        },
        "/stoicism/you-are-going-to-be-okay": {
            redirect: {
                to: "/stoicism/11/29",
                statusCode: 301
            }
        },
        "/stoicism/follow-the-logos": {
            redirect: {
                to: "/stoicism/11/30",
                statusCode: 301
            }
        },
        "/stoicism/pretend-today-is-the-end": {
            redirect: {
                to: "/stoicism/12/1",
                statusCode: 301
            }
        },
        "/stoicism/dont-mind-me-im-only-dying-slow": {
            redirect: {
                to: "/stoicism/12/2",
                statusCode: 301
            }
        },
        "/stoicism/the-philosopher-as-an-artisan-of-life-and-death": {
            redirect: {
                to: "/stoicism/12/3",
                statusCode: 301
            }
        },
        "/stoicism/you-dont-own-that": {
            redirect: {
                to: "/stoicism/NaN/NaN",
                statusCode: 301
            }
        },
        "/stoicism/the-benefits-of-sobering-thoughts": {
            redirect: {
                to: "/stoicism/12/5",
                statusCode: 301
            }
        },
        "/stoicism/the-sword-dangles-over-you": {
            redirect: {
                to: "/stoicism/12/6",
                statusCode: 301
            }
        },
        "/stoicism/the-cards-were-dealt": {
            redirect: {
                to: "/stoicism/12/7",
                statusCode: 301
            }
        },
        "/stoicism/dont-hide-from-your-feelings": {
            redirect: {
                to: "/stoicism/12/8",
                statusCode: 301
            }
        },
        "/stoicism/spendthrifts-of-time": {
            redirect: {
                to: "/stoicism/12/9",
                statusCode: 301
            }
        },
        "/stoicism/dont-sell-yourself-to-cheaply": {
            redirect: {
                to: "/stoicism/12/10",
                statusCode: 301
            }
        },
        "/stoicism/do-not-sell-yourself-to-cheaply": {
            redirect: {
                to: "/stoicism/12/10",
                statusCode: 301
            }
        },
        "/stoicism/dignity-and-bravery": {
            redirect: {
                to: "/stoicism/12/11",
                statusCode: 301
            }
        },
        "/stoicism/the-beat-goes-on": {
            redirect: {
                to: "/stoicism/12/12",
                statusCode: 301
            }
        },
        "/stoicism/its-just-a-number": {
            redirect: {
                to: "/stoicism/12/13",
                statusCode: 301
            }
        },
        "/stoicism/what-we-should-know-by-the-end": {
            redirect: {
                to: "/stoicism/12/14",
                statusCode: 301
            }
        },
        "/stoicism/a-simple-way-to-measure-our-days": {
            redirect: {
                to: "/stoicism/12/15",
                statusCode: 301
            }
        },
        "/stoicism/everlasting-good-health": {
            redirect: {
                to: "/stoicism/12/16",
                statusCode: 301
            }
        },
        "/stoicism/know-thyself-before-its-too-late": {
            redirect: {
                to: "/stoicism/12/17",
                statusCode: 301
            }
        },
        "/stoicism/what-comes-to-us-all": {
            redirect: {
                to: "/stoicism/12/18",
                statusCode: 301
            }
        },
        "/stoicism/human-scale": {
            redirect: {
                to: "/stoicism/12/19",
                statusCode: 301
            }
        },
        "/stoicism/fear-the-fear-of-death": {
            redirect: {
                to: "/stoicism/12/20",
                statusCode: 301
            }
        },
        "/stoicism/what-do-you-have-to-show-for-your-years": {
            redirect: {
                to: "/stoicism/12/21",
                statusCode: 301
            }
        },
        "/stoicism/stake-your-own-claim": {
            redirect: {
                to: "/stoicism/12/22",
                statusCode: 301
            }
        },
        "/stoicism/what-are-you-so-afraid-of-losing": {
            redirect: {
                to: "/stoicism/12/23",
                statusCode: 301
            }
        },
        "/stoicism/meaningless--like-a-fine-wine": {
            redirect: {
                to: "/stoicism/12/24",
                statusCode: 301
            }
        },
        "/stoicism/dont-burn-the-candle-at-both-ends": {
            redirect: {
                to: "/stoicism/12/25",
                statusCode: 301
            }
        },
        "/stoicism/do-not-burn-the-candle-at-both-ends": {
            redirect: {
                to: "/stoicism/12/25",
                statusCode: 301
            }
        },
        "/stoicism/life-is-long-if-you-know-how-to-use-it": {
            redirect: {
                to: "/stoicism/12/26",
                statusCode: 301
            }
        },
        "/stoicism/dont-let-your-soul-go-first": {
            redirect: {
                to: "/stoicism/12/27",
                statusCode: 301
            }
        },
        "/stoicism/do-not-let-your-soul-go-first": {
            redirect: {
                to: "/stoicism/12/27",
                statusCode: 301
            }
        },
        "/stoicism/on-being-remembered": {
            redirect: {
                to: "/stoicism/12/28",
                statusCode: 301
            }
        },
        "/stoicism/give-thanks": {
            redirect: {
                to: "/stoicism/12/29",
                statusCode: 301
            }
        },
        "/stoicism/taking-the-bite-out-of-it": {
            redirect: {
                to: "/stoicism/12/30",
                statusCode: 301
            }
        },
        "/stoicism/get-active-in-your-own-rescue": {
            redirect: {
                to: "/stoicism/12/31",
                statusCode: 301
            }
        },
        "/contact": {
            redirect: {
                to: "/#contact",
                statusCode: 301
            }
        },
        "/about": {
            redirect: {
                to: "/#about",
                statusCode: 301
            }
        }
    }
})
