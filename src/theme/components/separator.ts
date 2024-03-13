import plugin from 'tailwindcss/plugin'

export const separator = plugin(({ addComponents }) => {
  const baseStyles = {
    borderWidth: '0',
    backgroundColor: 'rgba(224, 224, 239, 1)',
    borderRadius: '4px'
  }
  addComponents({
    '.separator-x': { ...baseStyles, height: '1px' },
    '.separator-y': { ...baseStyles, width: '1px' }
  })
})
