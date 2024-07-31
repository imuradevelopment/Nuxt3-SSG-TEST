// https://nuxt.com/docs/api/configuration/nuxt-config

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
        baseURL: "/",
        // baseURL: '/Nuxt3-SSG-TEST',
        cdnURL: "/",
        // cdnURL: '/Nuxt3-SSG-TEST',
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            title: "株式会社ベイル",
            meta: [
                {
                    name: "description",
                    content: "新しい発想と技術とコミュニケーションで問題を解決しより良い方法をご提案させて頂きます。お気軽にお問い合わせください。",
                },
                {
                    name: "keywords",
                    content: "ソフトウェア",
                },
                {
                    name: "keywords",
                    content: "システム",
                },
                {
                    name: "keywords",
                    content: "情報処理",
                },
                {
                    name: "keywords",
                    content: "パソコン",
                },
                {
                    name: "keywords",
                    content: "目黒区",
                },
                {
                    name: "keywords",
                    content: "中目黒駅",
                },
                {
                    name: "keywords",
                    content: "ベイル",
                },
                {
                    name: "keywords",
                    content: "vaile",
                },
                {
                    name: "keywords",
                    content: "人材派遣",
                },
                {
                    name: "keywords",
                    content: "アルバイト",
                },
                {
                    name: "keywords",
                    content: "採用情報",
                },
                {
                    name: "keywords",
                    content: "入力",
                },
                {
                    name: "keywords",
                    content: "システム構築",
                },
                {
                    name: "keywords",
                    content: "事務コン",
                },
                {
                    name: "keywords",
                    content: "OA販売",
                },
                {
                    name: "keywords",
                    content: "ホームページサービス",
                },
                {
                    name: "keywords",
                    content: "SE",
                },
                {
                    name: "keywords",
                    content: "PC",
                },
                {
                    name: "keywords",
                    content: "Windows",
                },
            ],
        },
    },
    nitro: {
        esbuild: {
            options: {
                target: "es2019",
            },
        },
    },
    modules: ["@element-plus/nuxt", "@nuxtjs/tailwindcss", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", "@nuxt/image"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "@/assets/styles/element/index.scss" as element;`,
                },
            },
        },
        build: {},
    },
    elementPlus: {
        importStyle: "scss",
        themes: ["dark"],
    },
    css: ["~/assets/styles/css/reset.css", "~/assets/styles/css/style.css"],
    pinia: {},
    tailwindcss: {
        configPath: "~/tailwind.config.ts",
    },
    vue: {},
});
