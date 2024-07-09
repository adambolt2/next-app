import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '9/10': '90%',
        '9.5/10': '95%',
      },
      colors:{
        customGreen: '#99c499', 
        customBlue :'#a0c6c7'
      },
      animation: {
        fade: 'fadeOut 0.5s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out', 
        fadeInInner: 'fadeIn 1.2s ease-in-out'
      },
      keyframes: {  // Adding keyframes for fade-in and fade-out animations
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    },
  darkMode: 'class',
}
export default config
