import React from "react";
import Button from "../Button/Button";
import { ButtonProps } from "@/types/ButtonProps";

const SwitchButton = ({ text, clickHandler, classes }: ButtonProps) => {
    return (
        <Button
            classes={`text-md font-bold text-white p-1 bg-transparent border-0 cursor-pointer ${classes}`}
            text={text}
            clickHandler={clickHandler}
        />
    );
};

export default SwitchButton;
