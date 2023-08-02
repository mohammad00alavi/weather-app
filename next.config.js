/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com"],
    },
    publicRuntimeConfig: {
        PICTURES: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY,
        WEATHER_DATA: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
    },
};

module.exports = nextConfig;
