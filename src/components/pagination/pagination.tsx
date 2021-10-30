import { useEffect, useState } from 'react'
import * as S from './pagination-styles'

export type PaginationProps = {
  page: number
  totalPages: number
  onAddPage: () => void
  onRemovePage: () => void
}

export const Pagination = ({
  page,
  totalPages,
  onAddPage,
  onRemovePage,
}: PaginationProps) => {
  const [hasPreviousPage, setHasPreviousPage] = useState(false)
  const [hasNextPage, setHasNextPage] = useState(true)

  useEffect(() => {
    if (page === 1) {
      setHasPreviousPage(false)
    }

    if (page > 1) {
      setHasPreviousPage(true)
    }

    if (page === totalPages) {
      setHasNextPage(false)
    }

    if (page < totalPages) {
      setHasNextPage(true)
    }
  }, [page, totalPages])

  return (
    <S.Wrapper>
      <S.PagesWrapper>
        Página <strong>{page}</strong> de <strong>{totalPages}</strong>
      </S.PagesWrapper>

      <S.Button
        position='left'
        isDisabled={!hasPreviousPage}
        disabled={!hasPreviousPage}
        onClick={onRemovePage}
        aria-label='Voltar'
      >
        <svg viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M1 1L5 5L1 9' stroke='currentColor' strokeLinejoin='round' />
        </svg>
      </S.Button>

      <S.Button
        position='right'
        isDisabled={!hasNextPage}
        disabled={!hasNextPage}
        onClick={onAddPage}
        aria-label='Avançar'
      >
        <svg viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M1 1L5 5L1 9' stroke='currentColor' strokeLinejoin='round' />
        </svg>
      </S.Button>
    </S.Wrapper>
  )
}
