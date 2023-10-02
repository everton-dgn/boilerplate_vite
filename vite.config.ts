import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return {
    base: `${process.env.VITE_PUBLIC_PATH}/`,
    build: {
      sourcemap: mode === 'development'
    },
    plugins: [tsconfigPaths(), react(), svgr()],
    server: {
      open: true,
      port: Number(process.env.VITE_PORT)
    },
    test: {
      coverage: {
        exclude: [
          'src/testHelpers/',
          'src/ui/theme',
          'src/ui/globalStyles',
          'src/**/__tests__'
        ]
      },
      environment: 'happy-dom',
      globals: true,
      passWithNoTests: true,
      setupFiles: ['./vitest.setup.ts']
    }
  }
})
