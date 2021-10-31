import { createContext } from 'react'
import { useUsers } from 'resources/hooks'

import { SignInData, UserProps } from 'resources/types'

type AuthProviderProps = {
  children: React.ReactNode
}

type AuthContextType = {
  isAuthenticated: boolean
  signIn: (userData: SignInData) => Promise<void>
  signOut: () => Promise<void>
  user?: UserProps
  error?: string
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { isAuthenticated, signIn, signOut, user, error } = useUsers()
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signIn, signOut, user, error }}
    >
      {children}
    </AuthContext.Provider>
  )
}
