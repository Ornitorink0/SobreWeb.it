/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f7f7',   // Variante più chiara del nero
          100: '#eaeaea',
          200: '#bcbcbc',
          300: '#8d8e8e',
          400: '#5f5f60',
          500: '#414243',   // Colore principale (default)
          600: '#2c2d2e',
          700: '#1e1f20',
          800: '#141516',
          900: '#111213',   // Variante più scura (fornito)
        },
        accent1: {
          50: '#e5f7fe',   // Variante chiara del blu
          100: '#c3ecfd',
          200: '#9ae0fb',
          300: '#71d3fa',
          400: '#4bc8f9',
          500: '#43c2f9',  // Colore principale (fornito)
          600: '#38a9d8',
          700: '#2e90b8',
          800: '#267898',
          900: '#1f6279',  // Variante più scura
        },
        accent2: {
          50: '#e7f0f9',   // Variante chiara del blu medio
          100: '#c3d9ee',
          200: '#9cc1e3',
          300: '#75a9d7',
          400: '#5493cd',
          500: '#3773aa',  // Colore principale (fornito)
          600: '#31669a',
          700: '#2a598a',
          800: '#244c7a',
          900: '#1e3f69',  // Variante più scura
        },
        accent3: {
          50: '#e5eff2',   // Variante chiara del blu scuro
          100: '#c1d8de',
          200: '#99bfc9',
          300: '#70a5b4',
          400: '#528ea1',
          500: '#285569',  // Colore principale (fornito)
          600: '#244d5e',
          700: '#204553',
          800: '#1c3c48',
          900: '#18333d',  // Variante più scura
        },
      },
    },
  },
  plugins: [],
}
