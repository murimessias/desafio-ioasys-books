import { screen } from '@testing-library/react'
import { renderWithTheme } from 'resources/utils/tests/helpers'
import theme from 'styles/theme'

import { Main } from '.'

const props = {
  title: 'Desafio Ioasys',
  description: 'Boilerplate para o desafio da Ioasys',
}

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Main {...props} />)

    expect(
      screen.getByRole('heading', { name: /desafio ioasys/i }),
    ).toHaveStyleRule('color', theme.colors.accent)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('shoud render the background color', () => {
    const { container } = renderWithTheme(<Main {...props} />)

    expect(container.firstChild).toHaveStyleRule('color', theme.colors.white)
  })
})
