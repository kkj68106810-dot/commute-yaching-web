import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*', // /api 로 시작하는 요청은
                destination: 'http://localhost:8080/api/:path*', // 백엔드로 우회 전달
            },
        ];
    },
};

export default nextConfig;
