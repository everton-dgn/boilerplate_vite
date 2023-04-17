import windowSizes from './windowSizes'

const device = (value: number) => `@media screen and (min-width: ${value}px)`

const breakpoints = {
  mobile: device(windowSizes.sm),
  tablet: device(windowSizes.md),
  desktop: device(windowSizes.lg),
  custom: (width: number) => device(width)
}

export default breakpoints
