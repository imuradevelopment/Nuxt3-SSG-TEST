// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {
        enabled: true,
        timeline: {
            enabled: true,
        },
    },
    ssr: true, // SSRを有効にする
    target: "static", // 静的ホスティングを対象とする
    experimental: {
        payloadExtraction: true,
    },
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            title: "株式会社ベイル",
            meta: [{ name: "description", content: "リニューアルサイト" }],
        },
    },
    nitro: {
        esbuild: {
            options: {
                target: "es2019",
            },
        },
    },
    modules: ["@element-plus/nuxt", "nuxt-microcms-module", "@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/image"],
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
    },
    microCMS: {
        serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
        apiKey: process.env.MICROCMS_API_KEY,
        target: "all",
    },
    css: ["~/assets/styles/css/reset.css", "~/assets/styles/css/style.css"],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            "defineStore", // import { defineStore } from 'pinia'
            ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    tailwindcss: {
        configPath: "~/tailwind.config.ts",
    },
    scrollBehavior(to: any, from: any, savedPosition: any) {
        console.log(to);
        console.log(from);
        console.log(savedPosition);
        return { top: 0 };
    },
});
