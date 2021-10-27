import * as S from './main-styles'

export const Main = ({
  title = 'Desafio Ioasys',
  description = 'Boilerplate para o desafio da Ioasys',
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)
