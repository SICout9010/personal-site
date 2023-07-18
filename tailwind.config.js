/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ibmthai": ['IBMPlexSansThai-Regular', 'sans-serif'],
        "montserrat": ['Montserrat-Regular', 'sans-serif'],
        "montserrat-bold": ['Montserrat-Bold', 'sans-serif']
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
          'pos-0': '0% 0%',
          'pos-100': '100% 100%',
      },
    },
  },
  plugins: [],
}

