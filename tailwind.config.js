module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FDE8E8', // Soft pinkish red
          DEFAULT: '#F47C7C', // Modern, not too strong red
          dark: '#B91C1C', // Deep red for accents
        },
        secondary: {
          light: '#F9FAFB', // Off-white for contrast
          DEFAULT: '#F3F4F6', // Light gray for balance
          dark: '#374151', // Charcoal gray for text
        },
        accent: {
          light: '#FEF3C7', // Subtle yellowish cream
          DEFAULT: '#FACC15', // Golden yellow for highlights
          dark: '#CA8A04', // Deep mustard for details
        },
        neutral: {
          light: '#FFFFFF', // Pure white
          DEFAULT: '#E5E7EB', // Neutral light gray
          dark: '#1F2937', // Dark gray for headers
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
