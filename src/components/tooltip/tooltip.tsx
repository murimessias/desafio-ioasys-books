import * as S from './tooltip-styles'

export type TooltipProps = {
  error: string
}

export const Tooltip = ({ error }: TooltipProps) => (
  <S.Wrapper active={!!error}>{error}</S.Wrapper>
)
