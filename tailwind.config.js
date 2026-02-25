/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                gold: {
                    400: '#F7D56F',
                    500: '#D4AF37', // Primary Gold
                    600: '#B5952F',
                },
                cream: {
                    50: '#FFFDF5',
                    100: '#FFF9E6', // Base Background
                    200: '#FEF3C7',
                },
                brown: {
                    800: '#5A4B1A',
                    900: '#3A2E0F', // Dark Text/Accents
                },
                dental: {
                    teal: '#2DD4BF', // Brighter Teal (Teal-400)
                    purple: '#A855F7', // Brighter Purple (Purple-500)
                }
            },
            fontFamily: {
                playfair: ['"Playfair Display"', 'serif'],
                inter: ['"Inter"', 'sans-serif'],
                body: ['"Inter"', 'sans-serif'], // Added to fix build error
            },
            backgroundImage: {
                'gold-gradient': 'linear-gradient(145deg, #D4AF37, #F7D56F)',
                'section-gradient': 'linear-gradient(to right, #FCD34D, #FEF3C7)',
            },
            animation: {
                'fade-up': 'fadeUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 1s ease-out forwards',
                'spin-slow': 'spin 3s linear infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
