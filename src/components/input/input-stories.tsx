import { Story, Meta } from '@storybook/react'
import { Input, InputProps } from '.'

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    onInput: { action: 'changed' },
    onClick: { action: 'clicked' },
  },
} as Meta

export const Default: Story<InputProps> = (args) => (
  <div style={{ maxWidth: 540 }}>
    <Input {...args} />
  </div>
)

Default.args = {
  initialValue: '',
  label: 'E-mail',
  name: 'email',
  placeholder: 'john.cage@gmail.com',
  type: 'email',
}

export const WithButton: Story<InputProps> = (args) => (
  <div style={{ maxWidth: 540 }}>
    <Input {...args} />
  </div>
)

WithButton.args = {
  button: 'Entrar',
  initialValue: '',
  label: 'Senha',
  name: 'password',
  placeholder: '******',
  type: 'password',
}
