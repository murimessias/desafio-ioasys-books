import { useState } from 'react'

import { Card, Grid, Logo, Pagination } from 'components'
import * as S from './home-styles'

import { books } from './home-mock'
import { Modal } from 'components/modal'

export const Home = () => {
  const [page, setPage] = useState(1)
  const totalPages = 5

  const handleAddPage = () => setPage(page + 1)
  const handleRemovePage = () => setPage(page - 1)

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.LogoContainer>
            <Logo color='black' />
          </S.LogoContainer>

          <S.UserContainer>
            <S.User>
              Bem vindo, <strong>Guilherme!</strong>
            </S.User>

            <S.LogoutButton>
              <svg
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
              >
                <path
                  d='m11 4 4 4m0 0-4 4m4-4H4.5M6.5 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.5'
                  stroke='#333'
                  strokeLinejoin='round'
                />
              </svg>
            </S.LogoutButton>
          </S.UserContainer>
        </S.Header>

        <S.CardsContainer>
          <Grid>
            <Modal content={books[0]} />

            {books.map((book, index) => (
              <Card key={index} book={book} />
            ))}
          </Grid>
        </S.CardsContainer>

        <S.PaginationContainer>
          <Pagination
            page={page}
            totalPages={totalPages}
            onAddPage={handleAddPage}
            onRemovePage={handleRemovePage}
          />
        </S.PaginationContainer>
      </S.Wrapper>
    </>
  )
}
