import { renderWithTheme } from 'resources/utils/tests/helpers'
import { Grid } from '.'

describe('<Grid />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Grid>Items</Grid>)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-gap: 1.6rem;
        grid-template-columns: repeat(auto-fit,minmax(25rem,1fr));
      }

      <div
        class="c0"
      >
        Items
      </div>
    `)
  })
})
