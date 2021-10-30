import { screen } from '@testing-library/react'
import { renderWithTheme } from 'resources/utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import { Pagination } from '.'

describe('<Pagination />', () => {
  const paginationProps = {
    page: 1,
    totalPages: 5,
    onAddPage: jest.fn(),
    onRemovePage: jest.fn(),
  }

  it('should render correctly', () => {
    renderWithTheme(<Pagination {...paginationProps} />)

    const button = screen.getByLabelText(/avançar/i)
    expect(button).toBeInTheDocument()

    expect(screen.getByText(/página/i)).toBeInTheDocument()
  })

  it('should render a button to advance to next page and call the method if clicked', () => {
    renderWithTheme(<Pagination {...paginationProps} />)

    const button = screen.getByLabelText(/avançar/i)
    expect(button).toBeInTheDocument()
    userEvent.click(button)

    expect(paginationProps.onAddPage).toHaveBeenCalled()
  })

  it('should render a button to advance to next page and call the method if clicked', () => {
    renderWithTheme(<Pagination {...paginationProps} />)

    const button = screen.getByLabelText(/voltar/i)
    expect(button).toBeInTheDocument()
    userEvent.click(button)

    expect(paginationProps.onAddPage).toHaveBeenCalled()
  })
})
