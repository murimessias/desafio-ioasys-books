import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from '.'

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Entrar',
}
