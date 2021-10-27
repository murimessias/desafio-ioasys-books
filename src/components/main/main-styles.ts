import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    align-items: center;
    background-color: #111827;
    color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 3rem;
    text-align: center;
    width: 100%;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 3.2rem;
    color: ${theme.colors.accent};
    line-height: ${theme.leading.tight};
  `}
`

export const Description = styled.h2`
  font-size: 2.4rem;
  font-weight: 400;
`
