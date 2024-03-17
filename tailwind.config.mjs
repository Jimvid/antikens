/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            'pastel',
            {
                antic: {
                    primary: '#5b69e5',
                    secondary: '#1c1917',
                    accent: '#0f766e',
                    neutral: '#ede9fe',
                    'base-100': '#fefefe',
                    info: '#60a5fa',
                    success: '#6ee7b7',
                    warning: '#fbbf24',
                    error: '#f87171',
                },
            },
        ],
    },
}
