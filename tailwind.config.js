/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        'primary':"#F16029ff",
        "secondary":"#FFB902ff",
        "tertiary":"#028DDEff",
        "slate-gray":"#706E85ff",
        'dark-background':"#202124",
        'dark-forground':"#292a2d",
        'dark-slate-gray':'#E2DFD0'

      },
    },
  },
  plugins: [],
}