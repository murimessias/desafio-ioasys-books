import type { GetServerSideProps, NextPage } from 'next'

import { parseCookies } from 'nookies'

import { Home } from 'templates/home'

const Index: NextPage = () => <Home />

export default Index

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['@ioasys:token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
