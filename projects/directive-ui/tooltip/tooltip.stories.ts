import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { DuiButtonModule } from '../button/button.module';
import { TooltipDirective } from './tooltip.directive';
import { DuiTextModule } from '../text/text.module';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TooltipDirective> = {
  title: 'Tooltips / Tooltip',
  component: TooltipDirective,
  decorators: [
    moduleMetadata({
      imports: [DuiButtonModule, DuiTextModule]
    })
  ],
  tags: ['autodocs'],
  argTypes: {

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
  render: (args) => ({
    props: args,
    template: `
      <a dui-body size="lg" href="www.google.com">
        Test Link
        <span dui-tooltip>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</span>
      </a>
      <br /><br /><br /><br /><br /><br />
      <button dui-elevated-button>
        Test
        <span dui-tooltip>This is a test!</span>
      </button>
      `,
  })
};

export default meta;
type Story = StoryObj<TooltipDirective>;

export const Primary: Story = {
  tags: ['!dev']
}