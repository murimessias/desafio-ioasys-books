import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius.md};
    box-shadow: 0 0.6rem 2.4rem rgba(84, 16, 95, 0.15);
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: ${theme.spacings.sm};
    transition: all 250ms ease-in-out;
    width: 100%;

    h4 {
      color: ${theme.colors.black};
      margin-bottom: ${theme.spacings.xs};
      text-transform: uppercase;
    }

    div + div {
      margin-top: ${theme.spacings.sm};
    }

    ${media.greaterThan('medium')`
      flex-direction: row;
    `}
  `}
`

export const ImageWrapper = styled.div`
  max-width: 36rem;
  max-height: 36rem;
  position: relative;
  height: 35.6rem;
  width: 24rem;
  box-shadow: 0 0.6rem 2.4rem rgba(84, 16, 95, 0.45);

  ${media.greaterThan('medium')`
    margin-right: 3.2rem;
  `}
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  max-width: 40rem;
`

export const MainInfoWrapper = styled.div`
  margin-bottom: 0.8rem;
`

export const AuthorsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
`

export const Author = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.accent};
    font-weight: ${theme.font.weight.normal};
    list-style: none;
    padding-right: 0.4rem;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xl};
    line-height: ${theme.leading.tight};
    letter-spacing: -0.025rem;
  `}
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.4rem;
`

export const InfoItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    & span:first-child {
      color: ${theme.colors.black};
      font-weight: ${theme.font.weight.bold};
    }
  `}
`

export const DescriptionWrapper = styled.div``

export const Description = styled.blockquote`
  ${({ theme }) => css`
    height: 100%;

    ::-webkit-scrollbar {
      width: 0.4rem;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.accent};
      border-radius: 1rem;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.accent};
      filter: contrast(0.9);
    }

    &::before {
      bottom: 0.2rem;
      content: url('/icons/quotes.svg');
      display: inline-flex;
      height: 1.6rem;
      vertical-align: middle;
      margin-right: 0.4rem;
      position: relative;
      width: 1.4rem;
    }

    p {
      display: inline;
    }

    ${media.greaterThan('medium')`
      height: 8rem;
      overflow-y: scroll;
    `}
  `}
`
