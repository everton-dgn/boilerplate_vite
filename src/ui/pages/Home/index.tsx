import { useState } from 'react'
import useSetPageTitle from 'hooks/useSetPageTitle'
import Button from 'ui/components/atoms/Button'
import * as S from './styles'
import { ReactComponent as LogoReact } from 'ui/assets/images/logoReact.svg'
import { ReactComponent as LogoVite } from 'ui/assets/images/logoVite.svg'

const Home = () => {
  const [count, setCount] = useState(0)
  useSetPageTitle({ pageTitle: 'Boilerplate React' })

  return (
    <S.Container>
      <S.WrapperImages>
        <LogoVite role="img" title="Logo Vite" />
        <LogoReact role="img" title="Logo React" />
      </S.WrapperImages>
      <S.Title>Vite + React</S.Title>
      <Button
        aria-label={`COUNT: ${count}`}
        onClick={() => {
          setCount(prevState => prevState + 1)
        }}
        text={`COUNT: ${count}`}
      />
    </S.Container>
  )
}

export default Home
