import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { transparentize } from 'polished'

type ModalProps = {
  isOpen: boolean
}

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
  `,
}

export const Wrapper = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
    align-items: center;
    background: ${transparentize(0.1, theme.colors.black)};
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    transition: opacity 250ms ease-in;
    width: 100%;
    z-index: ${theme.layers.modal};

    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}

    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 72rem;
    margin: ${theme.spacings.sm};
    margin-top: 24rem;
    width: 100%;

    ${media.greaterThan('medium')`
      margin-top: 0;
    `}
  `}
`
