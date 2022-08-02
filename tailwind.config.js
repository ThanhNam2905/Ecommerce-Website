/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    mode: 'jit',
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
        './*.html',
    ],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '991px',
            xl: '1220px'
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '2rem',
                xl: '2rem',
                '2xl': '3rem',
            }
        },
        extend: {
            fontFamily: {
                'roboto': "'Roboto', sans-serif;",
                'roboto-mono': "'Roboto Mono', monospace;",
                'poppins': "'Poppins', sans-serif;",
            },
            colors: {
                'primary-color': '#FD3D57'
            },
            boxShadow: {
                'custom': '0px 0px 16px rgb(0 0 0 / 6%)',
            }
        },
    },
    variants: {
        extend: {
            display: ["group-hover"],
            visibility: ['group-hover'],
            transform: ["group-focus"]
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
    ],
}
