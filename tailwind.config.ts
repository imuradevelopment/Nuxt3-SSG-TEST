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
                        gray: "#697F9F",
                        blue: "#1d4ed8",
                    }
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
