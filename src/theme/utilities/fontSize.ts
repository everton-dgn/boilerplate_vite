import plugin from 'tailwindcss/plugin'

import { fontSizes } from '../variables'

export const fontSize = plugin(({ addUtilities }) => {
  const fs: Record<string, { fontSize: string }> = {}
  Object.entries(fontSizes).forEach(([key, value]) => {
    fs[`.fs-${key}`] = { fontSize: `${value}` }
  })
  addUtilities(fs)
})
