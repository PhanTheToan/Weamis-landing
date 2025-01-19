import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    webpack: (config, { isServer }) => {
        // Add alias for all cases
        config.resolve.alias = {
            ...config.resolve.alias,
            '~': path.resolve(__dirname, 'src'),
        };

        // Only add fallback for client-side
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                path: false
            };
        }

        // Add handlebars loader
        config.module.rules.push({
            test: /\.hbs$/,
            loader: 'handlebars-loader'
        });

        return config;
    }
};

export default nextConfig;