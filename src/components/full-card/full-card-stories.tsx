import { Story, Meta } from '@storybook/react'
import { FullCard, FullCardProps } from '.'
import card from './full-card-mock'

export default {
  title: 'Layout/FullCard',
  component: FullCard,
} as Meta

export const Default: Story<FullCardProps> = (args) => (
  <div style={{ width: '100%', maxWidth: 760 }}>
    <FullCard {...args} />
  </div>
)

Default.args = card
