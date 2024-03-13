import plugin from 'tailwindcss/plugin'

import { spacings } from '../variables'

export const directional = plugin(({ addUtilities }) => {
  const directions: Record<string, any> = {}
  Object.entries(spacings).forEach(([key, value]) => {
    const size = `${value}`
    directions[`.t-${key}`] = { top: size }
    directions[`.b-${key}`] = { bottom: size }
    directions[`.l-${key}`] = { left: size }
    directions[`.r-${key}`] = { right: size }
    directions[`.y-${key}`] = { top: size, bottom: size }
    directions[`.x-${key}`] = { left: size, right: size }
  })
  addUtilities(directions)
})
