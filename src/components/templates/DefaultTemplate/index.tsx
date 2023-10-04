import { Outlet } from 'react-router-dom'
import S from './styles.module.scss'

const DefaultTemplate = () => (
  <div className={S.grid}>
    <header className={S.header} role="banner">
      Boilerplate
    </header>
    <div className={S.container}>
      <Outlet />
    </div>
  </div>
)

export default DefaultTemplate
