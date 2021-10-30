import { screen } from '@testing-library/react'
import { renderWithTheme } from 'resources/utils/tests/helpers'
import theme from 'styles/theme'

import { Card } from '.'

const book = {
  title: 'Hooked',
  authors: ['Nir Eyal', 'Ryan Hoover'],
  imageUrl: '/img/book-img-placeholder.png',
  pageCount: 150,
  publisher: 'Loyola',
  published: 2020,
}

describe('<Card />', () => {
  it('should render the card correctly', () => {
    const { container } = renderWithTheme(<Card book={book} />)

    expect(screen.getByRole('heading', { name: /hooked/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the data correctly', () => {
    renderWithTheme(<Card book={book} />)

    expect(screen.getByRole('img')).toBeInTheDocument()

    const mediumFontSize = theme.font.sizes.md
    expect(screen.getByRole('heading', { name: /hooked/i })).toHaveStyle({
      'font-size': mediumFontSize,
    })

    const colorAccent = theme.colors.accent
    expect(screen.getByText('Nir Eyal')).toHaveStyle({
      color: colorAccent,
    })
  })
})
