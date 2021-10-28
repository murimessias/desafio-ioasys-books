import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-gap: ${theme.spacings.xs};
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  `}
`
