import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ElevatedButtonDirective } from './elevated-button.directive';
import { SurfaceDirective } from '../elevation/surface.directive';
import { BaseButtonDirective } from './base-button.directive';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ElevatedButtonDirective & SurfaceDirective & BaseButtonDirective> = {
  title: 'Buttons / Elevated Button',
  component: ElevatedButtonDirective,
  tags: ['autodocs'],
  argTypes: {
    level: {
      description: 'The elevation level of the button',
      table: {
        type: { summary: '1 | 2 | 3 | 4 | 5' },
        defaultValue: { summary: '1' }
      },
      options: [1, 2, 3, 4, 5],
      control: {
        type: 'select',
      }
    },
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
    level: 1,
    color: 'primary',
  },
  render: (args) => ({
    props: args,
    template: `
      <button dui-elevated-button 
        [level]="level" 
        [color]="color"
      >Test</button>`,
  })
};

export default meta;
type Story = StoryObj<ElevatedButtonDirective & SurfaceDirective & BaseButtonDirective>;

export const Primary: Story = {
 tags: ['!dev']
}