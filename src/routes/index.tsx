import { lazy } from 'react'

import Home from 'pages/Home'
import { createBrowserRouter } from 'react-router-dom'

import { DefaultTemplate } from 'components/templates'

const Error = lazy(async () => await import('pages/Error'))

export const router = createBrowserRouter([
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
