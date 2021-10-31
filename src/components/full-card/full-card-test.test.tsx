import { screen } from '@testing-library/react'
import { renderWithTheme } from 'resources/utils/tests/helpers'
import theme from 'styles/theme'

import { FullCard } from '.'

const props = {
  imageUrl: '/img/full-book-img-placeholder.png',
  title: 'Change By Design Second line exa',
  authors: ['Nir Eyal', 'Ryan Hoover', 'John Dude', 'Carls Marg', 'Adam Paul'],
  pageCount: 150,
  publisher: 'Loyola',
  published: 2020,
  language: 'Inglês',
  isbn10: '0062856626',
  isbn13: '978-0062856623',
  description:
    'The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.',
}

describe('<FullCard />', () => {
  it('should render the full card correctly', () => {
    const { container } = renderWithTheme(<FullCard {...props} />)

    expect(
      screen.getByRole('heading', {
        name: /change by design second line exa/i,
      }),
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the data correctly', () => {
    renderWithTheme(<FullCard {...props} />)

    expect(screen.getByRole('img')).toBeInTheDocument()

    const fontSize = theme.font.sizes.xl
    expect(
      screen.getByRole('heading', {
        name: /change by design second line exa/i,
      }),
    ).toHaveStyle({
      'font-size': fontSize,
    })
  })
})
