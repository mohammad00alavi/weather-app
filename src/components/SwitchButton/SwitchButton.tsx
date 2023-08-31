import React from "react";
import Button from "../Button/Button";
import { SwitchButtonProps } from "@/types/SwitchButtonProps";

const SwitchButton = ({
    text,
    clickHandler,
    activeComponent,
}: SwitchButtonProps) => {
    return (
        <Button
            classes={`text-md font-bold text-white p-1 bg-transparent border-0 cursor-pointer ${
                activeComponent === text ? "border-b-2" : "border-b-0"
            }`}
            text={text}
            clickHandler={clickHandler}
        />
    );
};

export default SwitchButton;
