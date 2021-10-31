import { useEffect, useState } from 'react'
import { api } from 'resources/services'
import { BookProps } from 'resources/types'

export const useBooks = () => {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [books, setBooks] = useState<BookProps[]>([])

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

  return {
    page,
    totalPages,
    setPage,
    books,
  }
}
