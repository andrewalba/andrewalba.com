/** @type {import('tailwindcss').Config} */

const andrewalba = {
    colors: {
        crete: {
            DEFAULT: '#61892F',
            50: '#BCDB95',
            100: '#B2D586',
            200: '#9FCB67',
            300: '#8BC149',
            400: '#77A739',
            500: '#61892F',
            600: '#435F21',
            700: '#263512',
            800: '#080C04',
            900: '#000000',
            950: '#000000'
        },
        atlantis: {
            DEFAULT: '#86C232',
            50: '#DAEEBD',
            100: '#D1EAAD',
            200: '#BEE28D',
            300: '#ACD96C',
            400: '#99D14C',
            500: '#86C232',
            600: '#679527',
            700: '#48691B',
            800: '#2A3C10',
            900: '#0B1004',
            950: '#000000'
        },
        copper: {
            DEFAULT: '#C26E32',
            50: '#EED2BD',
            100: '#EAC7AD',
            200: '#E2B08D',
            300: '#D99A6C',
            400: '#D1834C',
            500: '#C26E32',
            600: '#955527',
            700: '#693B1B',
            800: '#3C2210',
            900: '#100904',
            950: '#000000'
        },
        boston_blue: {
            DEFAULT: '#3286C2',
            50: '#BDDAEE',
            100: '#ADD1EA',
            200: '#8DBEE2',
            300: '#6CACD9',
            400: '#4C99D1',
            500: '#3286C2',
            600: '#276795',
            700: '#1B4869',
            800: '#102A3C',
            900: '#040B10',
            950: '#000000'
        },
        shark: {
            DEFAULT: '#222629',
            50: '#76838D',
            100: '#6C7982',
            200: '#59646C',
            300: '#474F56',
            400: '#343B3F',
            500: '#222629',
            600: '#090A0A',
            700: '#000000',
            800: '#000000',
            900: '#000000',
            950: '#000000'
        },
        abbey: {
            DEFAULT: '#474B4F',
            50: '#A2A7AC',
            100: '#979DA2',
            200: '#82888F',
            300: '#6E747A',
            400: '#5A5F64',
            500: '#474B4F',
            600: '#2C2F31',
            700: '#121314',
            800: '#000000',
            900: '#000000',
            950: '#000000'
        },
        nevada: {
            DEFAULT: '#6B6E70',
            50: '#C8CACB',
            100: '#BEBFC1',
            200: '#A9ABAD',
            300: '#949799',
            400: '#7F8285',
            500: '#6B6E70',
            600: '#505253',
            700: '#343637',
            800: '#19191A',
            900: '#000000',
            950: '#000000'
        },
    }
}

export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: andrewalba.colors.atlantis,
                secondary: andrewalba.colors.abbey,
                light: andrewalba.colors.nevada,
                black: andrewalba.colors.shark,
                atlantis: andrewalba.colors.atlantis,
                abbey: andrewalba.colors.abbey,
                crete: andrewalba.colors.crete,
                nevada: andrewalba.colors.nevada,
                shark: andrewalba.colors.shark,
                copper: andrewalba.colors.copper,
                'boston-blue': andrewalba.colors.boston_blue
            },
        },
        fontFamily: {
            'body': [
                'Inter',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'system-ui',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji'
            ],
            'sans': [
                'Inter',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'system-ui',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji'
            ]
        },
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
}

