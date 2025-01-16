module.exports = {
  content: [
    './layout/**/*.{html,ejs}',
    './source/**/*.{html,md,ejs}',
  ],
  theme: {
    extend: {
      colors: {
        "hacker-color1": "#2bbc8a",
        "hacker-color2": "#00c000",
        "hacker-color3": "#aaa",
        "hacker-hover-color": "#666",
        "line-color": "#14532D"
      },
      fontFamily: {
        dos: ['DOSFont', 'monospace'],
      },
      fontSize: {
        'huge': '5rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
  mode: 'jit',
};
