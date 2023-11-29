import type { Config } from "tailwindcss";
import tailwindTypography from '@tailwindcss/typography'
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
    cssPath: '~/assets/css/style/tailwind.css',
    config: {
        theme: {
            extend: {
                screens: {
                    sm: "480px",
                    md: "768px",
                    md2: "850px",
                    lg: "976px",
                    xl: "1440px",
                },
                fontFamily: {
                    sans: ["Meiryo", "Graphik", "sans-serif"],
                    serif: ["Meiryo", "Merriweather", "serif"],
                },
                colors: {
                    custom: {
                        gray: "rgb(105 127 159)",
                        blue: "rgba(0 95 181)",
                        blue2: "rgb(0 107 204)",
                        lightBlue: "rgb(0 191 255)",
                        lightOrange: "rgb(231 198 148)",
                        platina: "rgb(224 224 224)",
                    }
                },
                backgroundImage: {
                    // 'back004': "url('public/images/top/003.webp')",
                }
            },
        },
        plugins: ["tailwindTypography"],
        content: [
            "./components/**/*.{js,vue,ts}",
            "./layouts/**/*.vue",
            "./pages/**/*.vue",
            "./plugins/**/*.{js,ts}",
            "./app.vue",
        ],
    },
};
