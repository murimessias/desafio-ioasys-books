import * as S from './modal-styles'

export type ModalProps = {
  children: React.ReactNode
  isOpen: boolean
}

export const Modal = ({ children, isOpen }: ModalProps) => {
  return (
    <S.Wrapper isOpen={isOpen} aria-label='modal' aria-hidden={!isOpen}>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}
