/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "technigo-pink": "#FF4575",
                "technigo-light-pink": "#EB5577",
                "technigo-blue": "#0B24F5",
                "technigo-salmon": "#FFECEA",
                "technigo-yellow": "#FFD338",
                "technigo-light-blue": "#2483E0",
                "technigo-green": "#6DB486",
                "technigo-light-yellow": "#FFDE30"
            },
            maxWidth: {
                "default": "800px"
            },
            borderWidth: {
                "photo": "20px"
            }
        },
    },
    plugins: [],
}

