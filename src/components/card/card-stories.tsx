import { Story, Meta } from '@storybook/react'
import { Card, CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
} as Meta

export const Default: Story<CardProps> = (args) => (
  <div style={{ maxWidth: 400 }}>
    <Card {...args} />
  </div>
)

Default.args = {
  title: 'Hooked',
  authors: ['Nir Eyal', 'Ryan Hoover'],
  imageUrl: '/img/book-img-placeholder.png',
  pageCount: 150,
  publisher: 'Loyola',
  published: 2020,
}
