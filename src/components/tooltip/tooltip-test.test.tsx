import { screen } from '@testing-library/react'
import { renderWithTheme } from 'resources/utils/tests/helpers'

import { Tooltip } from '.'

describe('<Tooltip />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Tooltip error='Error' />)

    expect(screen.getByText('Error')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
