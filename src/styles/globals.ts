import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components'

type GlobalStyleProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStyleProps,
  DefaultTheme
> = createGlobalStyle`
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

    #__next {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  }

  input[type='text'],
  input[type='email'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }


  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      color: ${theme.colors.gray};
      background-color: ${theme.colors.caramel};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.sm};
      line-height: ${theme.leading.normal};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: ${theme.font.weight.bold};
    }

    ${!removeBg &&
    css`
      background-color: ${theme.colors.black};
    `}
  `}
`
export default GlobalStyles
