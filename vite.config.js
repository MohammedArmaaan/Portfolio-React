import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Niche wali line add karein. 
  // 'REPO_NAME' ki jagah apne GitHub Repository ka naam likhein.
  // Example: Agar repo ka naam 'portfolio' hai to base: '/portfolio/'
  base: "/REPO_NAME/", 
})
