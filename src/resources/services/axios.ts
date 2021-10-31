import axios, { AxiosRequestConfig } from 'axios'
import { parseCookies } from 'nookies'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAPIClient = (ctx?: any) => {
  const cookies = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'https://books.ioasys.com.br/api/v1',
    headers: {
      Accept: 'application/json',
    },
  })

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    return config
  })

  if (cookies) {
    api.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${cookies['@ioasys:token']}`
  }

  return api
}
