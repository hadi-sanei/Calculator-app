/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily:{
        'LeagueSpartan':'LeagueSpartan'
      },
      colors: {
        'main-background':'var(--main-background)',
        'toggle-background':'var(--toggle-background)',
        'key-toggle-background':'var(--key-toggle-background)',
        'screen-background':'var(--screen-background)',
        'key-clean-input-background':'var(--key-clean-input-background)',
        'key-clean-input-shadow':'var(--key-clean-input-shadow)',
        'key-background':'var(--key-background)',
        'key-shadow':'var(--key-shadow)',
        'key-background-equal':'var(--key-background-equal)',
        'key-background-equal-shadow':'var(--key-background-equal-shadow)'
      },
      screens: {
        'mobile': '400.1px',
      }
    },
  },
  plugins: [],
}

