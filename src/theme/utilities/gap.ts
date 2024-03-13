import plugin from 'tailwindcss/plugin'

import { spacings } from '../variables'

export const gap = plugin(({ addUtilities }) => {
  const gaps: Record<string, any> = {}
  Object.entries(spacings).forEach(([key, value]) => {
    gaps[`.g-${key}`] = { gap: `${value}` }
    gaps[`.gx-${key}`] = { columnGap: `${value}` }
    gaps[`.gy-${key}`] = { rowGap: `${value}` }
  })
  addUtilities(gaps)
})
