/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  reactStrictMode: true,
  env: {
    GA_MEASUREMENT_ID: "G-1NHY3YHHYP",
  },
}

module.exports = nextConfig
