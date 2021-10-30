import { Input, Logo, Tooltip } from 'components'
import { useState } from 'react'
import * as S from './login-styles'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const error = 'Email e/ou senha incorreta'

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = { email, password }
    console.log(data)
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>

        <S.Form onSubmit={handleLogin}>
          <Input
            type='email'
            name='email'
            label='E-mail'
            placeholder='books@ioasys.com.br'
            onInputChange={setEmail}
          />
          <Input
            type='password'
            name='password'
            label='Senha'
            placeholder='*******'
            button='Entrar'
            onInputChange={setPassword}
          />
          {!!error && <Tooltip error={error} active />}
        </S.Form>
      </S.Container>
    </S.Wrapper>
  )
}
