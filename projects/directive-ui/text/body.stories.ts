import { Meta, StoryObj } from "@storybook/angular";
import { BodyDirective } from "./body.directive";

const meta: Meta<BodyDirective> = {
    title: "Text / Body",
    component: BodyDirective,
    tags: ["autodocs"],
    argTypes: {
        size: {
            description: "The size of the body text",
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
            <p dui-body [size]="size">Lorem ipsum dolor sit amet</p>
        `
    })
}

export default meta;
type Story = StoryObj<BodyDirective>;

export const Primary: Story = {
    tags: ["!dev"]
}