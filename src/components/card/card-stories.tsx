import { Story, Meta } from '@storybook/react'
import { Card, CardProps } from '.'
import card from './card-mock'

export default {
  title: 'Layout/Card',
  argTypes: {
    onClick: { action: 'clicked' },
  },
  component: Card,
} as Meta

export const Default: Story<CardProps> = (args) => (
  <div style={{ maxWidth: 400 }}>
    <Card {...args} />
  </div>
)

Default.args = card
