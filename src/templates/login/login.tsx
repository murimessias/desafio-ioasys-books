import { Input, Logo, Tooltip } from 'components'
import * as S from './login-styles'

export const Login = () => (
  <S.Wrapper>
    <S.Container>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>

      <S.Form>
        <Input
          type='email'
          name='email'
          label='E-mail'
          placeholder='books@ioasys.com.br'
        />
        <Input
          type='password'
          name='password'
          label='Senha'
          placeholder='*******'
          button='Entrar'
        />
        <Tooltip error='Email e/ou senha incorreta' active />
      </S.Form>
    </S.Container>
  </S.Wrapper>
)
