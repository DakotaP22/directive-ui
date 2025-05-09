import type { Meta, StoryObj } from '@storybook/angular';
import { OutlineButtonDirective } from './outline-button.directive';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<OutlineButtonDirective> = {
  title: 'Buttons / Outline Button',
  component: OutlineButtonDirective,
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'The color class to use for the button',
      table: {
        type: { summary: 'primary | secondary | danger | success | cancel' },
        defaultValue: { summary: 'primary' }
      },
      options: ['primary', 'secondary', 'danger', 'success', 'cancel'],
      control: {
        type: 'select',
      },
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    color: 'primary',
  },
  render: (args) => ({
    props: args,
    template: `
      <button dui-outline-button 
        [color]="color"
      >Test</button>`,
  })
};

export default meta;
type Story = StoryObj<OutlineButtonDirective>;

export const Primary: Story = {
 tags: ['!dev']
}