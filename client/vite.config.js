import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  	const env = loadEnv(mode, process.cwd(), '')
	
	return {
		plugins: [react()],
		server: {
			proxy: {
				'/puzzle': {
					target: env.VITE_API_BASE_URL,
					changeOrigin: true,
					secure: false
				}
			}
		}
	}
})