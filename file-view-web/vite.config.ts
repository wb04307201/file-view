import {defineConfig} from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        viteStaticCopy({
            targets: [
                {
                    src: './node_modules/@mlightcad/data-model/dist/dxf-parser-worker.js',
                    dest: 'assets'
                },
                {
                    src: './node_modules/@mlightcad/cad-simple-viewer/dist/*-worker.js',
                    dest: 'assets'
                }
            ]
        })
    ],
    build: {
        outDir: './target/classes/META-INF/resources',
    }
})
