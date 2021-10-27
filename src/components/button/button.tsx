import { ButtonHTMLAttributes } from 'react'
import * as S from './button-styles'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children: React.ReactNode
} & ButtonTypes

export const Button = ({ children, ...props }: ButtonProps) => (
  <S.Wrapper {...props}>
    <span>{children}</span>
  </S.Wrapper>
)
