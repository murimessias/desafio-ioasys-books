import { screen } from '@testing-library/react'
import { renderWithTheme } from 'resources/utils/tests/helpers'
import theme from 'styles/theme'

import { Logo } from '.'

describe('<Logo />', () => {
  it('should render a white logo by default', () => {
    const { container } = renderWithTheme(<Logo />)

    const whiteColor = theme.colors.white
    expect(screen.getByLabelText(/ioasys/i).parentElement).toHaveStyle({
      color: whiteColor,
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a black logo', () => {
    renderWithTheme(<Logo color='black' />)

    const blackColor = theme.colors.black
    expect(screen.getByLabelText(/ioasys/i).parentElement).toHaveStyle({
      color: blackColor,
    })
  })
})
