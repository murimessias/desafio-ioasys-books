import Image from 'next/image'
import * as S from './card-styles'

import { BookProps } from 'resources/types'

export type CardProps = {
  book: Omit<BookProps, 'description' | 'isbn10' | 'isbn13' | 'language'>
}

export const Card = ({ book }: CardProps) => (
  <S.Wrapper>
    {!!book.imageUrl && (
      <S.ImageWrapper>
        <Image
          src={book.imageUrl}
          alt={book.title}
          layout='fill'
          objectFit='contain'
        />
      </S.ImageWrapper>
    )}

    <S.Content>
      <S.MainInfoWrapper>
        <S.Title>{book.title}</S.Title>
        <S.AuthorsWrapper>
          {book.authors.map((author, index) => (
            <S.Author key={index}>{author}</S.Author>
          ))}
        </S.AuthorsWrapper>
      </S.MainInfoWrapper>

      <S.InfoWrapper>
        <span>{book.pageCount} páginas</span>
        <span>Editora {book.publisher}</span>
        <span>Publicado em {book.published}</span>
      </S.InfoWrapper>
    </S.Content>
  </S.Wrapper>
)
