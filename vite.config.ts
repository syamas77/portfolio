import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: new URL('./index.html', import.meta.url).pathname,
        journal: new URL('./journal/index.html', import.meta.url).pathname,
      },
    },
  },
})
