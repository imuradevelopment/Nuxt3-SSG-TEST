// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography'

export default defineNuxtConfig({
    devtools: {
        enabled: true,

        timeline: {
            enabled: true,
        },
    },
    ssr: true,
    experimental: {
        payloadExtraction: false,
    },
    app: {
        // baseURL: '/',
        // baseURL: '/Nuxt3-SSG-TEST',
        // NUXT_APP_BASE_URL
        // cdnURL: '/',
        // cdnURL: '/Nuxt3-SSG-TEST',
        // NUXT_APP_CDN_URL
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            // viewport: "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=2.0,user-scalable=yes",
            title: "株式会社ペイル",
            meta: [
                // <meta name="description" content="My amazing site.">
                { name: "description", content: "リニューアルサイト" },
            ],
        },
    },
    // public: {
    //     apiBase: '/api'
    // }
    nitro: {
        // preset: 'node-server',
        // preset: 'netlify',
        // preset: 'netlify_edge'
        // preset: 'netlify_builder'
        // priset: ['github_pages', 'netlify', 'netlify_edge', 'netlify_builder'],
        // NITRO_PRESET=node-server nuxt build
        esbuild: {
            options: {
                target: "es2019",
            },
        },
    },
    modules: [
        "@element-plus/nuxt",
        "nuxt-microcms-module",
        "@nuxtjs/tailwindcss",
        "@pinia/nuxt",
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "@/assets/styles/element/index.scss" as element;`,
                },
            },
        },
    },
    elementPlus: {
        importStyle: "scss",
        themes: ["dark"],
        // icon: "ElIcon",
        // namespace: "el",
        // injectionID: { prefix: 1024, current: 0 },
        // ElTooltipコンポーネントをベースとするすべてのappend-to propsを修正する場合、ここに値を追加する必要があります。
        // appendTo: [],
        // Element Plusから自動的にインポートされないコンポーネントがある場合は、ここにコンポーネント名を追加する必要があります。
        // components: ['ElSubMenu'],
        // サブコンポーネントの定義ファイルが親コンポーネントにあるコンポーネントのマップ。
        // subComponents: {},
        // Element Plusから自動的にインポートされないディレクティブがある場合は、ここにディレクティブ名を追加する必要があります。
        // directives: {},
        // Element Plusからコンテンツを自動的にインポートしたい場合は、ここに追加できます。
        // imports: [],
        // コンポーネントが正しくスタイルをロードしない場合、ここにコンポーネント名を追加する必要があります。
        // noStylesComponents: [],
    },
    microCMS: {
        serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
        apiKey: process.env.MICROCMS_API_KEY,
        target: "all",
    },
    css: ["~/assets/styles/css/reset.css"],
    // postcss: {
    //     plugins: {
    //         tailwindcss: {
    //             config: {
    //                 theme: {
    //                     extend: {
    //                         screens: {
    //                             sm: "480px",
    //                             md: "768px",
    //                             lg: "976px",
    //                             xl: "1440px",
    //                         },
    //                         fontFamily: {
    //                             sans: ["メイリオ", "Graphik", "sans-serif"],
    //                             serif: ["メイリオ", "Merriweather", "serif"],
    //                         },
    //                         colors: {
    //                             custom: {
    //                                 gray: "#697F9F",
    //                                 blue: "#1d4ed8",
    //                             }
    //                         }
    //                     },
    //                 },
    //                 plugins: ["tailwindTypography"],
    //             },
    //         },
    //     },
    // },
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            "defineStore", // import { defineStore } from 'pinia'
            ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    tailwindcss: {
        // cssPath: '~/assets/css/tailwind.css',
        configPath: '~/tailwind.config.ts',
        // exposeConfig: false,
        // exposeLevel: 2,
        // config: {},
        // injectPosition: 'first',
        // viewer: true,
      }
});
