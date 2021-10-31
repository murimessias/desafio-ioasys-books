import type { GetServerSideProps, NextPage } from 'next'
import { parseCookies } from 'nookies'

import { Login } from 'templates/login'

const Index: NextPage = () => <Login />

export default Index

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['@ioasys:token']: cookies } = parseCookies(ctx)

  if (cookies) {
    return {
      redirect: {
        destination: '/books',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
