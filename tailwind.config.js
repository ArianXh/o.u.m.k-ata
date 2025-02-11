module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFE4E6', // Soft blush pink
          DEFAULT: '#FF5A5F', // Vibrant modern red (Airbnb-style)
          dark: '#B91C1C', // Deep bold red for accents
        },
        secondary: {
          light: '#F8FAFC', // Subtle cool white
          DEFAULT: '#E2E8F0', // Sleek neutral gray-blue
          dark: '#1E293B', // Dark slate for depth
        },
        accent: {
          light: '#FEF9C3', // Soft pastel yellow
          DEFAULT: '#FACC15', // Modern warm gold
          dark: '#D97706', // Deep orange-gold
        },
        neutral: {
          light: '#FFFFFF', // Pure white for clarity
          DEFAULT: '#F3F4F6', // Soft neutral gray
          dark: '#111827', // Deep navy-gray for strong contrast
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
