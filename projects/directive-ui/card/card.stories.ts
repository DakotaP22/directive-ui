import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { CardHeaderDirective } from './header/card-header.directive';
import { CardDirective } from './card.directive';
import { CardModule } from './card.module';
import { DuiTextModule } from '../text/text.module';
import { DuiButtonModule } from '../button/button.module';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<CardDirective> = {
    title: 'Card / Card',
    component: CardDirective,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [CardModule, DuiButtonModule]
        })
    ],
    argTypes: {
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
    render: (args) => ({
        props: args,
        template: `
        <div dui-card>
          <div dui-card-header>
            <img dui-card-avatar alt="test" src="https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg"/>
            <h1 dui-card-title>Mittens the Cat</h1>
            <p dui-card-subtitle>Orange Tabby <span style="color: red">(F)</span></p>
          </div>

          <div dui-card-body>
            <p style="margin: 0; padding: 0;">
              Mittens is a brown tabby cat who loves to nap and chase laser pointers. 
              She enjoys long naps in the sun and playing with her favorite toys.
              She is very affectionate and loves to cuddle with her owner.
            </p>
          </div>

          <div dui-card-actions>
            <button dui-elevated-button color="primary">Adopt Mittens</button>
            <button dui-outline-button color="success">Donate</button>
          </div>
        </div>
      `,
    }) };

export default meta;
type Story = StoryObj<CardDirective>;

export const Primary: Story = {
    tags: ['!dev']
}