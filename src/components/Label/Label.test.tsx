import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Label from "./index";

describe("Label Component", () => {
    it("renders correctly with default props", () => {
        render(<Label>Default Label</Label>);
        const label = screen.getByText("Default Label");
        expect(label).toBeInTheDocument();
        expect(label).toHaveStyle("font-size: 14px");
        expect(label).toHaveStyle("background-color: black");
    });

    it("renders correctly with primary prop", () => {
        render(<Label primary>Primary Label</Label>);
        const label = screen.getByText("Primary Label");
        expect(label).toBeInTheDocument();
        expect(label).toHaveStyle("background-color: blue");
    });

    it("renders correctly with large size prop", () => {
        render(<Label size="large">Large Label</Label>);
        const label = screen.getByText("Large Label");
        expect(label).toBeInTheDocument();
        expect(label).toHaveStyle("font-size: 18px");
    });

    it("renders correctly with small size props", () => {
        render(<Label size="small">Small Label</Label>);
        const label = screen.getByText("Small Label");
        expect(label).toBeInTheDocument();
        expect(label).toHaveStyle("font-size: 10px");
    });

    it("renders correctly with medium size props", () => {
        render(<Label size="medium">Medium Label</Label>);
        const label = screen.getByText("Medium Label");
        expect(label).toBeInTheDocument();
        expect(label).toHaveStyle("font-size: 14px");
    });
});
