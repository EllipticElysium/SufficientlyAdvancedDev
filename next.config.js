/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
        additionalData: `@import "src/scss/globals.scss";`,
    },
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: "/signin",
                    destination: `/login`,
                },
                {
                    source: "/sign-in",
                    destination: `/login`,
                },
                {
                    source: "/log-in",
                    destination: `/login`,
                },
                {
                    source: "/sign-up",
                    destination: `/signup`,
                },
                {
                    source: "/register",
                    destination: `/signup`,
                },
            ],
        };
    },
};

module.exports = nextConfig;
