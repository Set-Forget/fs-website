/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src.pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src.components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'green-gradient': 'linear-gradient(45deg, #3F9E53 40%, #ABFF84 60%)',
      },
      backgroundClip: {
        'text': 'text'
      },
      colors: {
        fsblack: "#0E100F",
        fswhite: "#FFFCF3",
        fsgreen: "#3F9E53",
        fsapple: "#ABFF84",
      },
    },
  },
  plugins: [],
}
