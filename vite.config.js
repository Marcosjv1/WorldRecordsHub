import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/worldrecords.js',
        chunkFileNames: 'assets/worldrecords-[name].js',
        assetFileNames: 'assets/worldrecords.[ext]',
      },
    },
  },
})
