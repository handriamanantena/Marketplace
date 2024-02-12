/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/market'
            },
        ];
    },
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true,
        domains: ['https://marketplace.r2pictures.uk', 'localhost']
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
};

export default config;
