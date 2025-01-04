import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(), // 开发工具插件，仅在开发时使用
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // 添加更多的别名配置
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables.scss" as *;`, // 自动引入 SCSS 变量（如有需要）
      },
    },
  },
  define: {
    'process.env': {}, // 可以在 Vite 中配置环境变量（如有需要）
  },
  server: {
    port: 3000, // 设置开发服务器的端口
    open: true, // 自动打开浏览器
  },
  build: {
    outDir: 'dist', // 设置构建输出目录
    sourcemap: true, // 生成 sourcemap，帮助调试
  },
})
