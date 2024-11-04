// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'spotify-green': '#1DB954', // Verde de Spotify
        'black': '#000000',
      },
    },
  },
  plugins: [],
}

export default config;
