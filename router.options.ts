// // router.options.ts
// import { defineNuxtConfig } from 'nuxt'
// import type { RouteLocationNormalized, RouteLocationNormalizedLoaded, ScrollToOptions } from 'vue-router'

// export default defineNuxtConfig({
//     // ...
//     router: {
//         scrollBehavior(
//             to: RouteLocationNormalized,
//             from: RouteLocationNormalizedLoaded,
//             savedPosition: ScrollToOptions | null
//         ) {
//             if (to.hash) {
//                 console.log(to.fullPath)
//                 return {
//                     el: to.hash,
//                     behavior: "smooth",
//                     offset: { x: 0, y: -60 }
//                 };
//             }
//         }
//     }
// })
