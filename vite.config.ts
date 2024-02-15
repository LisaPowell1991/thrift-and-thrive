import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copy from 'vite-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    assetsDir: 'src/assets',
  },  
  plugins: [
    react(),
    copy({
      targets: [
        { src: '/src/assets/images/*', dest: 'dist/assets/images' }
      ],
      hook: 'writeBundle' // run the plugin only when writing the bundle
    })
  ],
})
