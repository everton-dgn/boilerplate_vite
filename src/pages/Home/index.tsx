import { useState } from 'react'
import useSetPageTitle from 'hooks/useSetPageTitle'
import Button from 'components/atoms/Button'
import S from './styles.module.scss'
import LogoReact from 'assets/images/logoReact.svg?react'
import LogoVite from 'assets/images/logoVite.svg?react'

const Home = () => {
  const [count, setCount] = useState(0)
  useSetPageTitle({ pageTitle: 'Boilerplate React' })

  return (
    <main className={S.container}>
      <div className={S.wrapper_images}>
        <LogoVite role="img" title="Logo Vite" />
        <LogoReact role="img" title="Logo React" />
      </div>
      <h1 className={S.title}>Vite + React</h1>
      <Button
        aria-label={`COUNT: ${count}`}
        label={`COUNT: ${count}`}
        onClick={() => {
          setCount(prevState => prevState + 1)
        }}
      />
    </main>
  )
}

export default Home
