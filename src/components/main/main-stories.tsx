import { Meta, Story } from '@storybook/react'
import { Main, MainProps } from '.'

export default {
  title: 'Main',
  component: Main,
} as Meta

export const Basic: Story<MainProps> = (args) => <Main {...args} />

Basic.args = {
  title: 'Desafio Ioasys',
  description: 'Boilerplate para o desafio da Ioasys',
}
