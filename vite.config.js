import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/react-router", // Для корректной работы GitHub Pages, еще добавлена строчка  "postbuild": "cp dist/index.html dist/404.html", в package.json
	
	//   server: {
	//     open: true, // Проект будет сам открываться в браузере при запуске
	//   }
});
