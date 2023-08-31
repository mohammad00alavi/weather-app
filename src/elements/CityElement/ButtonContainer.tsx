import SwitchButton from "@/components/SwitchButton/SwitchButton";
import React from "react";

export type ButtonState = "Forecast" | "Temperature" | "Precipitation";

interface ButtonContainerProps {
    activeComponent: string;
    handleComponentChange: (value: ButtonState) => void;
}

const ButtonContainer = ({
    activeComponent,
    handleComponentChange,
}: ButtonContainerProps) => {
    return (
        <div className="flex flex-row pb-4 gap-4 lg:gap-8 justify-center">
            <SwitchButton
                text={"Forecast"}
                clickHandler={() => handleComponentChange("Forecast")}
                activeComponent={activeComponent}
            />
            <SwitchButton
                text={"Temperature"}
                clickHandler={() => handleComponentChange("Temperature")}
                activeComponent={activeComponent}
            />
            <SwitchButton
                text={"Precipitation"}
                clickHandler={() => handleComponentChange("Precipitation")}
                activeComponent={activeComponent}
            />
        </div>
    );
};

export default ButtonContainer;
