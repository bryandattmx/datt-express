import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/datt-express',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@components': path.resolve(__dirname, './src/components'),
      '@views': path.resolve(__dirname, './src/views')
    }
  }
})
