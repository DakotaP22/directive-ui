import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { BadgeDirective } from './badge.directive';
import { OutlineButtonDirective } from '../button/outline-button.directive';
import { DuiButtonModule } from '../button/button.module';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<BadgeDirective> = {
  title: 'Badges / Badge',
  component: BadgeDirective,
  decorators: [
    moduleMetadata({
      imports: [ DuiButtonModule ]
    })
  ],
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: "The size of the badge",
      table: {
        type: { summary: "xs | sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: {
        type: "select",
      },
    },
    color: {
      description: "The color of the badge",
      table: {
        type: { summary: "primary | secondary | danger | success | info" },
        defaultValue: { summary: "primary" },
      },
      options: ["primary", "secondary", "danger", "success", "info"],
      control: {
        type: "select",
      },
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    size: 'md',
    color: 'primary',
  },
  render: (args) => ({
    props: args,
    template: `
      <a>
        Inbox
        <span 
          dui-badge 
          [size]="size" 
          [color]="color"
        >99</span>
      </a>

      <br />

      <button dui-outline-button>
        Emptry Trash
        <span 
          dui-badge 
          [size]="size" 
          [color]="color"
        >33</span>
      </button>
      `,
  })
};

export default meta;
type Story = StoryObj<BadgeDirective>;

export const Primary: Story = {
  tags: ['!dev']
}