import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import windicss from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [react(), windicss()]
})
