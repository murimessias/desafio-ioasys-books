import styled, { css } from 'styled-components'
import { InputProps } from '.'

type WrapperProps = Pick<InputProps, 'disabled'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme }) => css`
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    border: 0;
    border-radius: ${theme.border.radius.md};
    display: flex;
    justify-content: space-between;
    height: 6rem;
    padding: 0 ${theme.spacings.xs};

    &:focus-within {
      outline: 0.2rem solid ${theme.colors.caramel};
      outline-offset: 0.2rem;
    }
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    flex-direction: column;
    flex: 1;
    padding-right: ${theme.spacings.xs};
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    background: transparent;
    border: 0;
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.lg};
    margin-top: 0.4rem;
    outline: none;
  `}
`

export const Label = styled.label`
  cursor: pointer;
`
