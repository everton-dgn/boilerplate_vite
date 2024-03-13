import plugin from 'tailwindcss/plugin'

export const containerCol = plugin(({ addUtilities }) => {
  addUtilities({
    '.container-col': {
      display: 'flex',
      flexDirection: 'column',
      width: `min(100% - 32px, 1500px - 32px)`,
      '@screen sm': {
        width: `min(100% - 48px, 1500px - 48px)`
      }
    }
  })
})
