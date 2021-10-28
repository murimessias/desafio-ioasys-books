import * as S from './tooltip-styles'

export type TooltipProps = {
  active?: boolean
  error: string
}

export const Tooltip = ({ error, active = false }: TooltipProps) => (
  <S.Wrapper active={active}>{error}</S.Wrapper>
)
