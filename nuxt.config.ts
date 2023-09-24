// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    app: {
        cdnURL: '/Nuxt3-SSG-TEST'
    },
    nitro: {
        // preset: 'node-server'
        'netlify'
        // 'netlify_edge'
        // 'netlify_builder'
    },
    devtools: { enabled: true },
    modules: [
        '@element-plus/nuxt'
    ],
})
