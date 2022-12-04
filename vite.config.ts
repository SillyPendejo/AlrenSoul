import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'
import TsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), WindiCSS(), TsConfigPaths()]
})
