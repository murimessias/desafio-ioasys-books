import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'resources/utils/tests/helpers'
import { books } from 'templates/home/home-mock'

import { Modal } from '.'

describe('<Modal />', () => {
  it('should render the modal', () => {
    const { container } = renderWithTheme(<Modal content={books[0]} />)

    expect(screen.getByLabelText('modal')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should handle close modal', () => {
    renderWithTheme(<Modal content={books[0]} />)

    const button = screen.getByLabelText(/fechar modal/i)
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
  })
})
