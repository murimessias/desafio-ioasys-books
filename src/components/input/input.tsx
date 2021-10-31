import { Button } from 'components'
import { useState, InputHTMLAttributes } from 'react'
import * as S from './input-styles'

export type InputProps = {
  button?: string
  initialValue?: string
  label?: string
  onClick?: () => void
  onInputChange?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({
  button,
  initialValue = '',
  label,
  name,
  onClick,
  onInputChange,
  ...props
}: InputProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper>
      <S.InputWrapper>
        {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
        <S.Input
          name={name}
          onChange={onChange}
          value={value}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>

      {!!button && (
        <Button type='submit' onClick={onClick}>
          {button}
        </Button>
      )}
    </S.Wrapper>
  )
}
