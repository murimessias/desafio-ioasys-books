import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    justify-content: center;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius.md};
    box-shadow: 0 0.6rem 2.4rem rgba(84, 16, 95, 0.15);
    cursor: pointer;
    display: flex;
    min-height: 16rem;
    padding: ${theme.spacings.xs} ${theme.spacings['2xs']};
    transition: all 250ms ease-in-out;
    width: 100%;

    &:hover {
      box-shadow: 0 0.6rem 2.4rem rgba(84, 16, 95, 0.35);
    }

    &:active {
      box-shadow: 0 0.3rem 1.2rem rgba(84, 16, 95, 0.15);
    }
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    max-width: 10rem;
    position: relative;

    img {
      box-shadow: 0 0.6rem 2.4rem rgba(84, 16, 95, 0.45);
    }

    ${media.greaterThan('medium')`
      margin-right: ${theme.spacings.xs};
    `}
  `}
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export const MainInfoWrapper = styled.div``

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.md};
  `}
`

export const AuthorsWrapper = styled.ul``

export const Author = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.accent};
    font-weight: ${theme.font.weight.normal};
    list-style: none;
  `}
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.4rem;

  span {
    display: inline-flex;
    margin-top: 0.2rem;
  }
`
