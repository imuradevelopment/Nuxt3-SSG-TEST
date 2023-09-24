// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    app: {
        cdnURL: '/Nuxt3-SSG-TEST'
    },
    nitro: {
        // preset: 'node-server'
        'netlify '
    },
    devtools: { enabled: true },
    modules: [
        '@element-plus/nuxt'
    ],
})
