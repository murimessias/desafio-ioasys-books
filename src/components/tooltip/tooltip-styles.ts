import styled, { css } from 'styled-components'

import { TooltipProps } from '.'

const wrapperModifiers = {
  active: () => css`
    opacity: 1;
  `,
}

export const Wrapper = styled.div<Pick<TooltipProps, 'active'>>`
  ${({ theme, active }) => css`
    align-items: center;
    background: ${theme.colors.white}30;
    border-radius: ${theme.border.radius.md};
    color: ${theme.colors.white};
    display: flex;
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.lg};
    line-height: ${theme.leading.none};
    opacity: 0;
    position: relative;
    padding: ${theme.spacings.xs} ${theme.spacings.sm};
    transition: all 250ms ease;
    width: fit-content;

    &::before {
      bottom: 100%;
      border-bottom: 0.8rem solid ${theme.colors.white}30;
      border-left: 0.8rem solid transparent;
      border-right: 0.8rem solid transparent;
      content: '';
      height: 0;
      pointer-events: none;
      position: absolute;
      width: 0;
    }

    ${!!active && wrapperModifiers.active()}
  `}
`
