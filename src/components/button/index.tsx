import React from "react";
import {StyledButton} from "./style";

export interface ButtonProps  {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
                    primary = true,
                    backgroundColor,
                    size = "medium",
                    onClick,
                    label,
                }: ButtonProps) => {
    const mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";
    return (
        <StyledButton
            type="button"
            className={["storybook-button", `storybook-button--${size}`, mode].join(
                " "
            )}
            style={backgroundColor ? { backgroundColor }: {}}
            onClick={onClick}
        >
            {label}
        </StyledButton>
    );
};

export default Button;
