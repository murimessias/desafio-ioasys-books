import { useContext, useEffect, useState } from 'react'
import { AuthContext } from 'resources/context'
import { api } from 'resources/services'

import { Card, Grid, Logo, Pagination } from 'components'
import * as S from './home-styles'

import { BookProps } from 'resources/types'
import router from 'next/router'

export const Home = () => {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [books, setBooks] = useState<BookProps[]>([])

  const { user, signOut } = useContext(AuthContext)

  useEffect(() => {
    const getData = async () => {
      await api
        .get('/books', {
          params: {
            page,
            amount: 12,
          },
        })

        .then((response) => {
          const books = [...response.data.data]
          const totalPages = response.data.totalPages
          const totalPagesToCeil = Math.ceil(totalPages)
          setBooks(books)
          setTotalPages(totalPagesToCeil)
        })

        .catch((error) => {
          return error
        })
    }

    getData()
  }, [page])

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
              Bem vindo, <strong>{user?.name}</strong>
            </S.User>

            <S.LogoutButton
              onClick={() => {
                signOut(), router.push('/')
              }}
            >
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
            {/* <Modal content={books[0]} /> */}

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
