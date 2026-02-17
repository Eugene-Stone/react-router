import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-router/'
//   server: {
//     open: true, // Проект будет сам открываться в браузере при запуске
//   }
})
