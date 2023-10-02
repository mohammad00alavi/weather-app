import { ButtonProps } from "@/types/ButtonProps";
import React from "react";

const Button = ({ text, clickHandler, classes }: ButtonProps) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            clickHandler();
        }
    };
    return (
        <div
            className={classes}
            onClick={clickHandler}
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            {text}
        </div>
    );
};

export default Button;
