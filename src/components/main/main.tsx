import styled from 'styled-components'

export const Main = ({ title = 'Desafio Ioasys' }) => (
  <main>
    <Title>{title}</Title>
  </main>
)

const Title = styled.h1`
  font-size: 1.75rem;
`
