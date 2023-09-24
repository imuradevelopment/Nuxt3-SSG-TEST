// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    app: {
        baseURL: '/',
        cdnURL: '/',
    },
    nitro: {
        // preset: 'node-server'
        // preset: 'netlify'
        // preset: 'netlify_edge'
        // preset: 'netlify_builder'
        priset: 'github_pages'
    },
    devtools: { enabled: true },
    modules: [
        '@element-plus/nuxt'
    ],
    elementPlus: { /** Options */ }
})
