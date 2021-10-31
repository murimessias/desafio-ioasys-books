import styled, { css } from 'styled-components'

export const CloseButton = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.border.radius.rounded};
    cursor: pointer;
    height: 3.2rem;
    margin-right: ${theme.spacings.xs};
    margin-top: ${theme.spacings.xs};
    outline: none;
    padding: 0.6rem;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 250ms ease-in-out;
    width: 3.2rem;

    svg {
      height: 100%;
      width: 100%;
    }
  `}
`
