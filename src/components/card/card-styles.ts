import styled, { css } from 'styled-components'

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

export const ImagePlaceHolder = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.accent};
    box-shadow: 0 0.4rem 1.2rem rgba(84, 16, 95, 0.25);
    color: ${theme.colors.caramel};
    display: flex;
    height: 13.2rem;
    justify-content: center;
    font-weight: ${theme.font.weight.bold};
    line-height: ${theme.leading.none};
    margin: 0 auto;
    text-align: center;
    width: 8.8rem;
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    display: block;
    margin-right: ${theme.spacings.xs};
    max-width: 10rem;
    position: relative;
    width: 100%;

    img {
      box-shadow: 0 0.4rem 1.2rem rgba(84, 16, 95, 0.25);
    }
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
    line-height: ${theme.leading.tight};
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
