import { RouterContext } from 'next/dist/shared/lib/router-context'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/globals'
import theme from 'styles/theme'
import '../.jest/next-image.mock'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },

  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: theme.colors.white
      },
      {
        name: 'dark',
        value: theme.colors.black
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
