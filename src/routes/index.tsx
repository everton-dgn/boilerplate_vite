import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import DefaultTemplate from 'components/templates/DefaultTemplate'
import Home from 'pages/Home'

const Error = lazy(async () => await import('pages/Error'))

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Home />,
        path: '/'
      }
    ],
    element: <DefaultTemplate />
  },
  {
    element: <Error />,
    path: '*'
  }
])
export default router
