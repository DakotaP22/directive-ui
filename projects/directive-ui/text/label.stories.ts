import { Meta, StoryObj } from "@storybook/angular";
import { LabelDirective } from "./label.directive";

const meta: Meta<LabelDirective> = {
    title: "Text / Label",
    component: LabelDirective,
    tags: ["autodocs"],
    argTypes: {
        size: {
            description: "The size of the label.",
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
            <label dui-label [size]="size">Lorem ipsum dolor sit amet</label>
        `
    })
}

export default meta;
type Story = StoryObj<LabelDirective>;

export const Primary: Story = {
    tags: ["!dev"]
}