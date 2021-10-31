import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    color: ${theme.colors.black};
    display: flex;
    justify-content: space-between;
    margin-top: ${theme.spacings.md};
  `}
`

export const PagesWrapper = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xs};
    margin-right: ${theme.spacings.xs};
    order: 1;

    ${media.greaterThan('medium')`
      order: 0;
    `}
  `}
`
type ButtonProps = {
  position: 'left' | 'right'
  isDisabled: boolean
}

const buttonModifiers = {
  isDisabled: (theme: DefaultTheme) => css`
    cursor: not-allowed;
    opacity: 0.8;

    &:hover {
      background: ${darken(0.1, theme.colors.caramel)};
    }
  `,

  left: (theme: DefaultTheme) => css`
    order: 0;
    margin-right: ${theme.spacings['2xs']};

    svg {
      transform: rotate(180deg);
    }
  `,

  right: (theme: DefaultTheme) => css`
    order: 2;
    margin-left: ${theme.spacings['2xs']};
  `,
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, position, isDisabled }) => css`
    background: ${theme.colors.caramel}00;
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.border.radius.rounded};
    color: ${theme.colors.gray};
    cursor: pointer;
    height: 3.2rem;
    padding: 0.6rem;
    outline: none;
    transition: all 250ms ease-in-out;
    width: 3.2rem;

    &:hover {
      background: ${darken(0.2, theme.colors.caramel)};
      color: ${theme.colors.black};
    }

    &:active {
      background: ${darken(0.35, theme.colors.caramel)};
      color: ${theme.colors.black};
    }

    svg {
      height: 100%;
      width: 100%;
    }

    ${!!position && buttonModifiers[position](theme)}
    ${!!isDisabled && buttonModifiers.isDisabled(theme)}
  `}
`
