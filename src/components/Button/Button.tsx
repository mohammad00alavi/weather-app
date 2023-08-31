import { ButtonProps } from "@/types/ButtonProps";
import React from "react";

const Button = ({ text, clickHandler, classes }: ButtonProps) => {
    return (
        <div className={classes} onClick={clickHandler}>
            {text}
        </div>
    );
};

export default Button;
