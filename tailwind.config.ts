// tailwind.config.ts
import plugin from "tailwindcss-rtl";

export default {
    content: [
        "./components/**/*.{vue,js,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./app.vue",
        "./node_modules/ui-thing/**/*"
    ],
    theme: {
        extend: {},
    },
    plugins: [plugin,
        function ({ addVariant }) {
            addVariant("rtl", '[dir="rtl"] &');
        },
    ],
};
