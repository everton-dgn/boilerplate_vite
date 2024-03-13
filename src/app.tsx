import { Suspense } from 'react'

import { RouterProvider } from 'react-router-dom'
import { router } from 'routes'

import { MainProvider } from 'providers/main'

import 'theme/globals.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'

const App = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  </Suspense>
)

export default App
