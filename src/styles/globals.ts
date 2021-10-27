import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Heebo';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: local('Hebbo Regular'),
          url('/fonts/heebo-v12-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Heebo';
    font-style: normal;
    font-display: swap;
    font-weight: 500;
    src: local('Hebbo Medium'),
          url('/fonts/heebo-v12-latin-500.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
    }
  `}
`
export default GlobalStyles
