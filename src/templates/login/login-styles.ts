import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.accent};
    background-image: url('/img/background-img.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    min-height: 100vh;

    ${media.greaterThan('medium')`
      justify-content: flex-start;
    `}
  `}
`
export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    max-width: 40rem;
    min-height: 100vh;
    padding: 0 ${theme.spacings.xs};
    width: 100%;

    ${media.greaterThan('medium')`
      margin-left: 16rem;
    `}
  `}
`

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xl};
    width: 20rem;
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;

    div + div {
      margin-top: ${theme.spacings.xs};
    }
  `}
`
