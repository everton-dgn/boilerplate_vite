import { screen } from '@testing-library/react'
import { renderWithProviders } from 'tests/providers'

import { DefaultTemplate } from '..'

describe('[Template] Default', () => {
  it('should render a text', () => {
    renderWithProviders(<DefaultTemplate />)
    const title = screen.getByRole('banner')
    expect(title).toHaveTextContent('Boilerplate')
  })
})
