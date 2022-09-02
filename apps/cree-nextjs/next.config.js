const withTm = require("next-transpile-modules")(["react-ui"])

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withTm(nextConfig)
