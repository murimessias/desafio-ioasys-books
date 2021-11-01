import { Story, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '.'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
} as Meta

export const Default: Story<TooltipProps> = (args) => <Tooltip {...args} />

Default.args = {
  error: 'Email e/ou senha incorretos.',
}
