import axios, { AxiosRequestConfig } from 'axios'
import { parseCookies } from 'nookies'

export const getAPIClient = (ctx = undefined) => {
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
