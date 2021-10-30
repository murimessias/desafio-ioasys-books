import { useState } from 'react'
import { FullCard, FullCardProps } from 'components'

import * as S from './modal-styles'

export type ModalProps = {
  content: FullCardProps
}

export const Modal = ({ content }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper isOpen={isOpen} aria-label='modal' aria-hidden={!isOpen}>
      <S.CloseButton
        role='button'
        aria-label='Fechar modal'
        onClick={() => setIsOpen(false)}
      >
        <svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
          <path
            d='m12.035 4.507.036-.036-.036-.035-.471-.471-.035-.036-.036.036L8 7.458 4.507 3.965l-.036-.036-.035.036-.471.471-.036.035.036.036L7.458 8l-3.493 3.493-.036.036.036.035.471.471.035.036.036-.036L8 8.542l3.493 3.493.036.036.035-.036.471-.471.036-.035-.036-.036L8.542 8l3.493-3.493Z'
            fill='currentColor'
            stroke='currentColor'
            strokeWidth='.1'
          />
        </svg>
      </S.CloseButton>

      <S.Content>
        <FullCard {...content} />
      </S.Content>
    </S.Wrapper>
  )
}
