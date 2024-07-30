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
                { name: "description", content: "リニューアルサイト" },
                { name: "keywords", content: "a5b3878fa5c1b85e9db58feb9b6e3449" },
                { name: "keywords", content: "https://hp-renewal.netlify.app/" },
                { name: "google-site-verification", content: "MuapyJzQSkc_8HF8rwPlMke578eRvIc8JWPnP5z3aaE" },
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
        build: {
        },
    },
    elementPlus: {
        importStyle: "scss",
        themes: ["dark"],
    },
    css: ["~/assets/styles/css/reset.css", "~/assets/styles/css/style.css"],
    pinia: {
    },
    tailwindcss: {
        configPath: "~/tailwind.config.ts",
    },
    vue: {
    },
});
