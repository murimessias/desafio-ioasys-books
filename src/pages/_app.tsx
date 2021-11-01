import { AppProps } from 'next/app'
import Head from 'next/head'

import theme from 'styles/theme'
import GlobalStyles from 'styles/globals'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from 'resources/context'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <link rel='shortcut icon' href='/img/icon-512.png' />
          <link rel='apple-touch-icon' href='/img/icon-512.png' />
          <meta name='description' content='Ioasys front-end challenge' />
        </Head>

        <DefaultSeo {...SEO} />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
