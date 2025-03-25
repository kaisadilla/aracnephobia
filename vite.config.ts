import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import eslint from 'vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        eslint({
            failOnWarning: false,
        }),
    ],
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, "src/"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@src/mixins.scss";\n`,
            }
        }
    },
})
