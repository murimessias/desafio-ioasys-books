import styled, { css } from 'styled-components'
import { darken } from 'polished'

import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: ${theme.spacings.xs};
  `}
`

export const CardsContainer = styled.main`
  width: 100%;
  max-width: 120rem;
`

export const Header = styled.header`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: ${theme.spacings.xl} 0;
    max-width: 120rem;
    width: 100%;
  `}
`

export const LogoContainer = styled.div`
  max-width: 20rem;
`

export const UserContainer = styled.div`
  align-items: center;
  display: flex;
`

export const User = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    display: none;

    ${media.greaterThan('medium')`
      display: block;
    `}
  `}
`

export const LogoutButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.caramel}00;
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.border.radius.rounded};
    cursor: pointer;
    height: 3.2rem;
    margin-left: ${theme.spacings.xs};
    padding: 0.6rem;
    outline: none;
    transition: all 250ms ease-in-out;
    width: 3.2rem;

    &:hover {
      background: ${darken(0.2, theme.colors.caramel)};
    }

    svg {
      height: 100%;
      width: 100%;
    }
  `}
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 120rem;
  width: 100%;

  ${media.greaterThan('medium')`
    justify-content: end;
  `}
`
