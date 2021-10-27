import { render, screen } from '@testing-library/react'
import { Main } from '.'

const props = {
  title: 'Desafio Ioasys',
  description: 'Boilerplate para o desafio da Ioasys',
}

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main {...props} />)

    expect(
      screen.getByRole('heading', { name: /desafio ioasys/i }),
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('shoud render the backgroun color', () => {
    const { container } = render(<Main {...props} />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#111827' })
  })
})
