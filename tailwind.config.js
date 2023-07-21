/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/elements/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            textShadow: {
                default: "0 2px 5px rgba(0, 0, 0, 0.5)",
                lg: "0 2px 10px rgba(0, 0, 0, 0.5)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                ".text-shadow": {
                    textShadow: "2px 2px 2px rgba(255, 255, 255, 0.9)",
                },
            };
            addUtilities(newUtilities);
        },
    ],
};
