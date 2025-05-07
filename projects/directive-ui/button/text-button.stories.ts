import type { Meta, StoryObj } from '@storybook/angular';
import { TextButtonDirective } from './text-button.directive';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TextButtonDirective> = {
  title: 'Buttons / Text Button',
  component: TextButtonDirective,
  tags: ['autodocs'],
  argTypes: {
    
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
  },
  render: (args) => ({
    props: args,
    template: `
      <button dui-text-button color="primary">Primary</button>
      <button dui-text-button color="secondary">Secondary</button>
      <button dui-text-button color="success">Success</button>
      <button dui-text-button color="danger">Danger</button>
      <button dui-text-button color="cancel">Cancel</button>
    `,
  })
};

export default meta;
type Story = StoryObj<TextButtonDirective>;

export const Primary: Story = {
 tags: ['!dev']
}