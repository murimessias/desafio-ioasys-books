import Image from 'next/image'
import * as S from './card-styles'

import { BookProps } from 'resources/types'

export type CardProps = Omit<
  BookProps,
  'description' | 'isbn10' | 'isbn13' | 'language'
>

export const Card = ({
  title,
  authors,
  imageUrl,
  pageCount,
  publisher,
  published,
}: CardProps) => (
  <S.Wrapper>
    {!!imageUrl && (
      <S.ImageWrapper>
        <Image src={imageUrl} alt={title} layout='fill' objectFit='contain' />
      </S.ImageWrapper>
    )}

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
