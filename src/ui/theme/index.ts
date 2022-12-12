import { animations } from './animations'
import { colors } from './colors'
import { spacings } from './spacings'
import { fonts } from './typographies'

const grid = {
  container: '130rem',
  gutter: '24px'
}

const border = {
  radius: '4px',
  circle: '50%'
}

const layers = {
  base: 10
}

const T = {
  colors,
  fonts,
  spacings,
  animations,
  grid,
  border,
  layers
} as const

export default T
