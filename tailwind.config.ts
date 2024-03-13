import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'

import {
  colors,
  zIndex,
  spacings,
  fontWeights,
  fontSizes,
  boxShadows,
  borderRadius,
  screens,
  keyframes
} from './src/theme/variables'
import { utilities } from './src/theme/utilities'
import { components } from './src/theme/components'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './index.html'
  ],
  theme: {
    screens,
    colors,
    zIndex,
    borderRadius,
    fontWeight: fontWeights,
    fontSize: fontSizes,
    fontFamily: {
      sans: 'var(--font-poppins)'
    },
    extend: {
      width: { ...defaultTheme.width, ...spacings },
      height: { ...defaultTheme.height, ...spacings },
      spacing: { ...defaultTheme.spacing, ...spacings },
      borderWidth: { ...defaultTheme.borderWidth, ...spacings },
      boxShadow: { ...defaultTheme.boxShadow, ...boxShadows },
      keyframes: { ...defaultTheme.keyframes, ...keyframes },
      aspectRatio: {
        ...defaultTheme.aspectRatio,
        '600/317': '600/317',
        '10/7': '10/7'
      }
    }
  },
  plugins: [...components, ...utilities]
}

export default config
