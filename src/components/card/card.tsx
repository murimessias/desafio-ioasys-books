import Image from 'next/image'
import * as S from './card-styles'

import { BookProps } from 'resources/types'

export type CardProps = {
  onClick: () => void
} & Omit<BookProps, 'description' | 'isbn10' | 'isbn13' | 'language' | 'id'>

export const Card = ({
  authors,
  imageUrl,

  pageCount,
  publisher,
  published,
  title,
  onClick,
}: CardProps) => (
  <S.Wrapper onClick={onClick}>
    <S.ImageWrapper>
      {imageUrl ? (
        <Image src={imageUrl} alt={title} layout='fill' objectFit='contain' />
      ) : (
        <S.ImagePlaceHolder>{title}</S.ImagePlaceHolder>
      )}
    </S.ImageWrapper>

    <S.Content>
      <S.MainInfoWrapper>
        <S.Title>{title}</S.Title>
        <S.AuthorsWrapper>
          {authors.map((author, index) => (
            <S.Author key={index}>{author}</S.Author>
          ))}
        </S.AuthorsWrapper>
      </S.MainInfoWrapper>

      <S.InfoWrapper>
        <span>{pageCount} páginas</span>
        <span>Editora {publisher}</span>
        <span>Publicado em {published}</span>
      </S.InfoWrapper>
    </S.Content>
  </S.Wrapper>
)
