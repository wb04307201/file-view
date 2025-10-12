import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: process.env.NODE_ENV === 'production' ? '/' : '/', // 默认值（开发环境）
    build: {
        outDir: './target/classes/META-INF/resources',
    },
})
