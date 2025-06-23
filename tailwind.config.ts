// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./lib/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-mona-sans)", "sans-serif"],
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
