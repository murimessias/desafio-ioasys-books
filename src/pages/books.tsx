import type { GetServerSideProps, NextPage } from 'next'

import { parseCookies } from 'nookies'
import { getAPIClient } from 'resources/services'

import { Home } from 'templates/home'

const Index: NextPage = () => <Home />

export default Index

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx)
  const { ['@ioasys:token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  await apiClient.get('/books', {
    params: {
      page: 1,
      amount: 12,
    },
  })

  return {
    props: {},
  }
}
