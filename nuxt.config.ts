// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    // app: {
    //     cdnURL: '/Nuxt3-SSG-TEST'
    // },
    nitro: {
        // preset: 'node-server'
        // preset: 'netlify'
        // preset: 'netlify_edge'
        // preset: 'netlify_builder'
    },
    devtools: { enabled: true },
    modules: [
        '@element-plus/nuxt'
    ],
    elementPlus: { /** Options */ }
})
