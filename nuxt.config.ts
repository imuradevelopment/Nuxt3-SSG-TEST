// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,

        timeline: {
            enabled: true
        }
    },
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
        // priset: ['github_pages', 'netlify', 'netlify_edge', 'netlify_builder'],
        // NITRO_PRESET=node-server nuxt build
        esbuild: {
            options: {
                target: 'es2019'
            }
        }
    },
    modules: [
        '@element-plus/nuxt',
        'nuxt-microcms-module'
    ],
    elementPlus: {
        importStyle: 'css',
        themes: ['dark'],
        icon: 'ElIcon',
        namespace: 'el',
        injectionID: { prefix: 1024, current: 0 },
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
        target: 'all'
    },
    css: ['~/public/assets/css/reset.css'],
})
