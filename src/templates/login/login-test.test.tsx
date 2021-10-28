import { screen } from '@testing-library/react'
import { renderWithTheme } from 'resources/utils/tests/helpers'

import { Login } from '.'

describe('<Login />', () => {
  it('should render form', () => {
    renderWithTheme(<Login />)

    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()
  })

  it('should render a logo', () => {
    renderWithTheme(<Login />)

    expect(screen.getByLabelText(/ioasys logo/i)).toBeInTheDocument()
  })
})
