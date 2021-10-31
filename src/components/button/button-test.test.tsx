import { screen } from '@testing-library/react'
import { renderWithTheme } from 'resources/utils/tests/helpers'
import theme from 'styles/theme'

import { Button } from '.'

describe('<Button />', () => {
  it('should render a button', () => {
    const { container } = renderWithTheme(<Button>Entrar</Button>)

    const color = theme.colors.accent
    const fontSize = theme.font.sizes.lg

    expect(screen.getByRole('button', { name: /entrar/i })).toHaveStyle({
      color: color,
      height: '3.6rem',
      fontSize: fontSize,
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
