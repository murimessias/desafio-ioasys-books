import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/globals'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Ioasys | Desafio Front-End</title>
        <link rel='shortcut icon' href='/img/icon-512.png' />
        <link rel='apple-touch-icon' href='/img/icon-512.png' />
        <meta name='description' content='Ioasys front-end challenge' />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
