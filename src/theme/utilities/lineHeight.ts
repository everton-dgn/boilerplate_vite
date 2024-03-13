import plugin from 'tailwindcss/plugin'

import { lineHeights } from '../variables'

export const lineHeight = plugin(({ addUtilities }) => {
  const lh: Record<string, { lineHeight: string }> = {}
  Object.entries(lineHeights).forEach(([key, value]) => {
    lh[`.lh-${key}`] = { lineHeight: `${value}` }
  })
  addUtilities(lh)
})
