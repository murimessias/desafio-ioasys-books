import Image from 'next/image'

import * as S from './card-styles'

export type CardProps = {
  title: string
  authors: string[]
  imageUrl: string
  pageCount: number
  publisher: string
  published: number
}

export const Card = ({
  title,
  authors,
  imageUrl,
  pageCount,
  publisher,
  published,
}: CardProps) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <Image src={imageUrl} alt={title} layout='fill' objectFit='cover' />
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
