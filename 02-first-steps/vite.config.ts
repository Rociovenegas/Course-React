import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import { test } from 'vitest';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true
  }
})
