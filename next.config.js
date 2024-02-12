/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true,
        domains: ['https://thumbnail.r2.dailyirasuto.com', 'localhost']
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
};

export default config;
