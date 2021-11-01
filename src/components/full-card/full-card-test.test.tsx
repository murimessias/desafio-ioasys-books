import { screen } from '@testing-library/react'
import { renderWithTheme } from 'resources/utils/tests/helpers'
import theme from 'styles/theme'

import card from './full-card-mock'
import { FullCard } from '.'

describe('<FullCard />', () => {
  it('should render the full card correctly', () => {
    const { container } = renderWithTheme(<FullCard {...card} />)

    expect(
      screen.getByRole('heading', {
        name: /change by design second line exa/i,
      }),
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the data correctly', () => {
    renderWithTheme(<FullCard {...card} />)

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
