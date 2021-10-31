import { useState } from 'react'
import { BookProps } from 'resources/types'

import { Card, FullCard, Grid, Modal } from 'components'
import * as S from './list-books-styles'

export type ListBooksProps = {
  books: BookProps[]
}

const initialData = {
  id: 'oi',
  imageUrl: '/img/full-book-img-placeholder.png',
  title: 'Change By Design Second line exa',
  authors: ['Nir Eyal', 'Ryan Hoover', 'John Dude', 'Carls Marg', 'Adam Paul'],
  pageCount: 150,
  publisher: 'Loyola',
  published: 2020,
  language: 'Inglês',
  isbn10: '0062856626',
  isbn13: '978-0062856623',
  description:
    'The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.',
}

export const ListBooks = ({ books }: ListBooksProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<BookProps>(initialData)

  const handleOpenModal = (book: BookProps) => {
    setIsOpen(true)
    setContent(book)
  }

  return (
    <>
      <Grid>
        {books.map((book) => (
          <Card key={book.id} onClick={() => handleOpenModal(book)} {...book} />
        ))}
      </Grid>

      <Modal isOpen={isOpen}>
        <S.CloseButton
          role='button'
          aria-label='Fechar modal'
          onClick={() => setIsOpen(false)}
        >
          <svg
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
          >
            <path
              d='m12.035 4.507.036-.036-.036-.035-.471-.471-.035-.036-.036.036L8 7.458 4.507 3.965l-.036-.036-.035.036-.471.471-.036.035.036.036L7.458 8l-3.493 3.493-.036.036.036.035.471.471.035.036.036-.036L8 8.542l3.493 3.493.036.036.035-.036.471-.471.036-.035-.036-.036L8.542 8l3.493-3.493Z'
              fill='currentColor'
              stroke='currentColor'
              strokeWidth='.1'
            />
          </svg>
        </S.CloseButton>
        <FullCard {...content} />
      </Modal>
    </>
  )
}
