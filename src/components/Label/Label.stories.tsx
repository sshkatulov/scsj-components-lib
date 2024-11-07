import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import Label, { LabelProps } from "./index";

const meta = {
    title: "Components/Label",
    component: Label,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Default Label",
    },
};

export const Primary: Story = {
    args: {
        children: "Primary Label",
        primary: true,
    },
};

export const Large: Story = {
    args: {
        children: "Large Label",
        size: "large",
    },
};

export const Small: Story = {
    args: {
        children: "Small Label",
        size: "small",
    },
};
