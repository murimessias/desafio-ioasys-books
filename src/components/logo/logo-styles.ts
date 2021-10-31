/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css } from 'styled-components'
import { LogoProps } from '.'

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
  `}
`
