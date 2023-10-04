import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from 'routes'
import MainProvider from 'providers/main'
import 'theme/reset.scss'

const App = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  </Suspense>
)

export default App
