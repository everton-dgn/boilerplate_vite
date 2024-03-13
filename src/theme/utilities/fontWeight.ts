import plugin from 'tailwindcss/plugin'

import { fontWeights } from '../variables'

export const fontWeight = plugin(({ addUtilities }) => {
  const fw: Record<string, { fontWeight: string }> = {}
  Object.entries(fontWeights).forEach(([key, value]) => {
    fw[`.fs-${key}`] = { fontWeight: `${value}` }
  })
  addUtilities(fw)
})
