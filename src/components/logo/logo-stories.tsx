import { Story, Meta } from '@storybook/react'
import { Logo, LogoProps } from '.'

export default {
  title: 'Brand/Logo',
  component: Logo,
} as Meta

export const Default: Story<LogoProps> = (args) => (
  <div style={{ width: 200 }}>
    <Logo {...args} />
  </div>
)
