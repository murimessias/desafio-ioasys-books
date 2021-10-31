import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.border.radius.rounded};
    color: ${theme.colors.accent};
    cursor: pointer;
    font-size: ${theme.font.sizes.lg};
    font-weight: ${theme.font.weight.bold};
    height: 3.6rem;
    min-width: 8rem;
    padding: 0 ${theme.spacings.sm};
    transition: all 250ms ease-in-out;

    &:hover {
      background-color: ${theme.colors.caramel};
    }
  `}
`
