import { screen } from '@testing-library/react'
import { renderWithTheme } from 'resources/utils/tests/helpers'

import { Tooltip } from '.'

describe('<Tooltip />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Tooltip error='Error' />)

    expect(screen.getByText('Error')).toHaveStyle({ opacity: 0 })
  })

  it('should render correctly when active', () => {
    const { container } = renderWithTheme(<Tooltip error='Error' active />)

    expect(screen.getByText('Error')).toHaveStyle({ opacity: 1 })

    expect(container.firstChild).toMatchSnapshot()
  })
})
