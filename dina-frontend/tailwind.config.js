/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    backgroundImage: {
      hero: "url('/bg1.jpg')",
      crousel: "url('/footer.png')",
    },
  },
}
