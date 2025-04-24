import { Meta, StoryObj } from "@storybook/angular";
import { CaptionDirective } from "./caption.directive";

const meta: Meta<CaptionDirective> = {
    title: "Text / Caption",
    component: CaptionDirective,
    tags: ["autodocs"],
    argTypes: {
        size: {
            description: "The size of the caption.",
            table: {
                type: { summary: "xs | sm | md | lg" },
                defaultValue: { summary: "md" },
            },
            options: ["xs", "sm", "md", "lg"],
            control: {
                type: "select",
            },
        }
    },
    args: {
        size: "md"
    },
    render: (args) => ({
        props: args,
        template: `
            <p dui-caption [size]="size">Lorem ipsum dolor sit amet</p>
        `
    })
}

export default meta;
type Story = StoryObj<CaptionDirective>;

export const Primary: Story = {
    tags: ["!dev"]
}