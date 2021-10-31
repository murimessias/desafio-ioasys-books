import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'resources/utils/tests/helpers'

import { Input } from '.'

describe('<Input />', () => {
  it('should render with label', () => {
    renderWithTheme(<Input label='E-mail' name='email' type='email' />)

    expect(screen.getByLabelText('E-mail')).toBeInTheDocument()
  })

  it('should render without label', () => {
    renderWithTheme(<Input type='text' />)

    expect(screen.queryByLabelText('E-mail')).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<Input placeholder='john.cage@gmail.com' type='email' />)

    expect(
      screen.getByPlaceholderText('john.cage@gmail.com'),
    ).toBeInTheDocument()
  })

  it('should render with a button', () => {
    renderWithTheme(
      <Input label='Senha' name='password' type='password' button='entrar' />,
    )

    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()
  })

  it('should change value when typing', async () => {
    const onInputChange = jest.fn()
    renderWithTheme(
      <Input
        label='E-mail'
        name='email'
        onInputChange={onInputChange}
        type='email'
      />,
    )

    const input = screen.getByLabelText('E-mail')
    const email = 'john.cage@gmail.com'
    userEvent.type(input, email)

    await waitFor(() => {
      expect(input).toHaveValue(email)
      expect(onInputChange).toHaveBeenCalledTimes(email.length)
    })

    expect(onInputChange).toHaveBeenCalledWith(email)
  })
})
