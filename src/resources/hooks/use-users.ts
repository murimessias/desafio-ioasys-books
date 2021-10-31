import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { useEffect, useState } from 'react'
import { api } from 'resources/services'
import { SignInData, UserProps } from 'resources/types'

const COOKIES_MAX_AGE = 24 * 60 * 60 * 7

export const useUsers = () => {
  const [user, setUser] = useState<UserProps | undefined>()
  const [error, setError] = useState('')
  const isAuthenticated = !!user

  const router = useRouter()

  useEffect(() => {
    const { '@ioasys:token': token, '@ioasys:user': user } = parseCookies()

    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      const parsedUser = JSON.parse(user)
      setUser(parsedUser)
    }
  }, [])

  const signIn = async ({ email, password }: SignInData) => {
    await api
      .post('/auth/sign-in', {
        email,
        password,
      })

      .then((response: AxiosResponse) => {
        const { id, name, birthdate, gender }: UserProps = response.data
        const user = JSON.stringify(response.data)

        const token: string = response.headers.authorization
        const refreshToken: string = response.headers['refresh-token']

        setCookie(undefined, '@ioasys:user', user, {
          maxAge: COOKIES_MAX_AGE,
        })

        setCookie(undefined, '@ioasys:token', token, {
          maxAge: COOKIES_MAX_AGE,
        })

        setCookie(undefined, '@ioasys:refresh-token', refreshToken, {
          maxAge: COOKIES_MAX_AGE,
        })

        setUser({ id, name, email, birthdate, gender })

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`

        router.push('/books')
        return response
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          if (error.response.status === 401) {
            const { errors } = error.response.data
            const errorMessage: string = errors.message

            setError(errorMessage)
          }

          if (error.response.data) {
            const { errors } = error.response.data
            const errorMessage: string = errors.message

            setError(errorMessage)
          }
        }
      })
  }

  const signOut = async () => {
    destroyCookie(undefined, '@ioasys:user')
    destroyCookie(undefined, '@ioasys:token')
    destroyCookie(undefined, '@ioasys:refresh-token')
    router.push('/')
  }

  return {
    signIn,
    signOut,
    error,
    isAuthenticated,
    user,
  }
}
