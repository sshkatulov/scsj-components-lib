import React, { ReactNode } from "react";
import styled from "styled-components";

export interface LabelProps {
    children: ReactNode | string;
    primary?: boolean;
    size?: "small" | "medium" | "large";
}

const StyledLabel = styled.span<LabelProps>`
    display: inline-block;
    padding: 8px 12px;
    color: white;
    border-radius: 4px;
    font-size: ${(props) => {
        switch (props.size) {
            case "small":
                return "10px";
            case "large":
                return "18px";
            case "medium":
            default:
                return "14px";
        }
    }};
    background-color: ${(props) => (props.primary ? "blue" : "black")};
`;

const Label: React.FC<LabelProps> = ({
    children,
    primary = false,
    size = "medium",
}) => {
    return (
        <StyledLabel primary={primary} size={size}>
            {children}
        </StyledLabel>
    );
};

export default Label;
