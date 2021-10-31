export type UserProps = {
  id: string
  name: string
  email: string
  birthdate: string
  gender: 'M' | 'F'
}

export type SignInData = {
  email: string
  password: string
}
