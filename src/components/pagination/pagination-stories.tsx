import { Story, Meta } from '@storybook/react'
import { Pagination, PaginationProps } from '.'

export default {
  title: 'Layout/Pagination',
  component: Pagination,
  argTypes: {
    onAddPage: { action: 'clicked' },
    onRemovePage: { action: 'clicked' },
  },
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
} as Meta

export const Default: Story<PaginationProps> = (args) => (
  <Pagination {...args} />
)

Default.args = {
  page: 1,
  totalPages: 10,
}
