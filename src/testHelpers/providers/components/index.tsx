import type { ReactNode } from 'react'
import type { RenderResult } from '@testing-library/react'
import { render } from '@testing-library/react'
import MainProvider from 'ui/providers/mainProvider'

const renderWithProviders = (children: ReactNode): RenderResult =>
  render(<MainProvider>{children}</MainProvider>)

export default renderWithProviders
