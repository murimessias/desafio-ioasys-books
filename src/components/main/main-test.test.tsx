import { render, screen } from '@testing-library/react'
import { Main } from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /desafio ioasys/i }),
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('shoud render the backgroun color', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#111827' })
  })
})
