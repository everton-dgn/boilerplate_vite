import styled from 'styled-components'
import T from 'ui/theme'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${T.spacings.macro};
  padding: 0;
  align-items: center;
`

export const WrapperImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${T.spacings.xxl};
  width: 100%;
  padding: 0 ${T.spacings.sm};
  justify-content: center;

  svg {
    width: 87px;
    min-width: 87px;
    height: 77px;

    ${T.breakpoints.tablet} {
      width: 174px;
      min-width: 174px;
      height: 155px;
    }
  }
`

export const Title = styled.h1`
  font-weight: ${T.fonts.weights.regular};
  text-align: center;
`
