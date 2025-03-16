import type { NextConfig } from "next";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack: cfg => {
        cfg.resolve.alias = {
            ...cfg.resolve.alias,
            "@src": path.resolve(process.cwd(), 'src'),
        };

        return cfg;
    }
};

export default nextConfig;
