import plugin from 'tailwindcss/plugin'

import { spacings } from '../variables'

export const size = plugin(({ addUtilities }) => {
  const sizes: Record<string, any> = {}
  Object.entries(spacings).forEach(([key, value]) => {
    sizes[`.max-size-${key}`] = { maxWidth: `${value}`, maxHeight: `${value}` }
    sizes[`.min-size-${key}`] = { minWidth: `${value}`, minHeight: `${value}` }
    sizes[`.square-${key}`] = {
      minWidth: `${value}`,
      minHeight: `${value}`,
      width: `${value}`,
      height: `${value}`
    }
  })
  addUtilities(sizes)
})
