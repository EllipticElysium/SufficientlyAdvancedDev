/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
        additionalData: `@import "src/scss/globals.scss";`,
    },
};

module.exports = nextConfig;
