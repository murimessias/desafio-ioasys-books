import { Logo, Pagination } from 'components'
import { ListBooks } from 'components/list-books'
import * as S from './home-styles'

import { useBooks, useUsers } from 'resources/hooks'

export const Home = () => {
  const { signOut, user } = useUsers()
  const { books, page, setPage, totalPages } = useBooks()

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

            <S.LogoutButton onClick={signOut}>
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
          <ListBooks books={books} />
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
