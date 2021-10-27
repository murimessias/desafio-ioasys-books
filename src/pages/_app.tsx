import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/globals'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Ioasys | Desafio Front-End</title>
        <link rel='shortcut icon' href='/img/icon-512.png' />
        <link rel='apple-touch-icon' href='/img/icon-512.png' />
        <meta name='description' content='Ioasys front-end challenge' />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
