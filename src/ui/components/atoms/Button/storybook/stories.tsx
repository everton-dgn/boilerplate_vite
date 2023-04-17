import { Meta, StoryObj } from '@storybook/react'
import Button from '..'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  args: {
    text: 'Click Here'
  },
  argTypes: {
    onClick: { action: 'onClick' }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Basic: Story = {}
