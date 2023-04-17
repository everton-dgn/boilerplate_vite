import { createBrowserRouter } from 'react-router-dom'
import * as Pages from 'ui/pages'
import * as C from 'ui/components'

const router = createBrowserRouter([
  {
    element: <C.DefaultTemplate />,
    children: [
      {
        path: '/',
        element: <Pages.Home />
      }
    ]
  },
  {
    path: '*',
    element: <Pages.Error />
  }
])
export default router
