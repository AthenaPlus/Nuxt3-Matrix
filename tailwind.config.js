/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `App.{js,ts,vue}`,
      `app.{js,ts,vue}`
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }