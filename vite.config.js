import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/reactcicd/', // 👈 Add this (it must match your repo name)
  plugins: [react()],
})
