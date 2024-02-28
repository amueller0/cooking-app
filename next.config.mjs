import nextPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development"
    }
};

const withPWA = nextPWA({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true
});

export default withPWA(nextConfig);
