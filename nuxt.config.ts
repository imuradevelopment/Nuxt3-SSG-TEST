// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    experimental: {
        payloadExtraction: false
    },
    app: {
        // baseURL: '/',
        // baseURL: '/Nuxt3-SSG-TEST',
        // NUXT_APP_BASE_URL
        // cdnURL: '/',
        // cdnURL: '/Nuxt3-SSG-TEST',
        // NUXT_APP_CDN_URL
    },
    // public: {
    //     apiBase: '/api'
    // }
    nitro: {
        // preset: 'node-server'
        // preset: 'netlify',
        // preset: 'netlify_edge'
        // preset: 'netlify_builder'
        priset: ['github_pages', 'netlify', 'netlify_edge', 'netlify_builder']
        // NITRO_PRESET=node-server nuxt build
    },
    devtools: { enabled: true },
    modules: [
        '@element-plus/nuxt'
    ],
    elementPlus: { /** Options */ }
})
