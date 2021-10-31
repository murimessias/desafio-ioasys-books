import { Story, Meta } from '@storybook/react'
import { FullCard, FullCardProps } from '.'

export default {
  title: 'FullCard',
  component: FullCard,
} as Meta

export const Default: Story<FullCardProps> = (args) => (
  <div style={{ width: '100%', maxWidth: 760 }}>
    <FullCard {...args} />
  </div>
)

Default.args = {
  imageUrl: '/img/full-book-img-placeholder.png',
  title: 'Change By Design Second line exa',
  authors: ['Nir Eyal', 'Ryan Hoover', 'John Dude', 'Carls Marg', 'Adam Paul'],
  pageCount: 150,
  publisher: 'Loyola',
  published: 2020,
  language: 'Inglês',
  isbn10: '0062856626',
  isbn13: '978-0062856623',
  description:
    'The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.',
}
