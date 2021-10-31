import { screen } from '@testing-library/react'
import { renderWithTheme } from 'resources/utils/tests/helpers'

import { Modal } from '.'

describe('<Modal />', () => {
  it('should render the modal', () => {
    const { container } = renderWithTheme(<Modal isOpen>Modal</Modal>)

    expect(screen.getByLabelText('modal')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
