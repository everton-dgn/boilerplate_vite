import { useNavigate } from 'react-router-dom'
import { useSetPageTitle } from 'hooks'
import * as S from './styles'
import * as C from 'ui/components'
import { ReactComponent as IconArrowUp } from 'ui/assets/icons/arrow_up.svg'

const Home = () => {
  useSetPageTitle({ pageTitle: 'Boilerplate React' })
  const navigate = useNavigate()

  return (
    <S.Container role="main">
      <C.TitleSection title="Web Accessibility" />

      <br />

      <IconArrowUp width={50} height={50} title="Arrow pointing up" />

      <br />

      <S.BtnGroup>
        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Page Example 1"
          aria-label="Page Example 1"
          className="btn"
          onClick={() => navigate('page-example-1')}
        />
      </S.BtnGroup>
    </S.Container>
  )
}

export default Home
