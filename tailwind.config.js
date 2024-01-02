import { Theme } from './src/configs/theme';

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: Theme.colors
    },
  },
  plugins: [],
}