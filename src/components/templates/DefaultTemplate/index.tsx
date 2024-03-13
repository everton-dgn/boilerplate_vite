import { Outlet } from 'react-router-dom'

export const DefaultTemplate = () => (
  <div className="h-full grow p-16 center col-full">
    <header className="mb-32 text-center text-32 font-600" role="banner">
      Boilerplate
    </header>
    <Outlet />
  </div>
)
