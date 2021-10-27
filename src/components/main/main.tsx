import * as S from './main-styles'

export type MainProps = {
  title: string
  description: string
}

export const Main = ({ title, description }: MainProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)
