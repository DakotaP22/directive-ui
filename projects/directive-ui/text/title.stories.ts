import { Meta, StoryObj } from "@storybook/angular";
import { TitleDirective } from "./title.directive";

const meta: Meta<TitleDirective> = {
    title: "Text / Title",
    component: TitleDirective,
    tags: ["autodocs"],
    argTypes: {
        size: {
            description: "The size of the title",
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
            <h1 dui-title [size]="size">Cool App Title</h1>
        `
    })
}

export default meta;
type Story = StoryObj<TitleDirective>;

export const Primary: Story = {
    tags: ["!dev"]
}