import { renderWithTheme } from 'resources/utils/tests/helpers'

import { Home } from '.'

describe('<Home />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Home />)
  })
})
