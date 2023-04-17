/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return {
    base: `${process.env.VITE_PUBLIC_PATH}/`,
    plugins: [tsconfigPaths(), react(), svgr()],
    server: {
      port: Number(process.env.VITE_PORT),
      open: true
    },
    build: {
      sourcemap: true
    },
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: ['./.test/setup.ts'],
      passWithNoTests: true,
      coverage: {
        provider: 'c8',
        exclude: [
          'src/testHelpers/',
          'src/ui/theme',
          'src/ui/globalStyles',
          'src/**/__tests__'
        ]
      }
    }
  }
})
