import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.svg'],
  build: {
    rollupOptions: {
      plugins: [
        prerender({
          routes: ['/'],
          renderer: '@prerenderer/renderer-puppeteer',
          rendererOptions: {
            maxConcurrentRoutes: 1,
            renderAfterTime: 3000,
          },
          postProcess(renderedRoute) {
            renderedRoute.html = renderedRoute.html
              .replace(/<script[^>]*type="module"[^>]*crossorigin[^>]*><\/script>/g, '')
            return renderedRoute
          },
        }),
      ],
    },
  },
})
