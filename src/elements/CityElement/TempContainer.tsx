import React, { useState } from "react";
import ForecastContainer from "./ForecastContainer";
import ButtonContainer, { ButtonState } from "./ButtonContainer";

const TempContainer = () => {
    const [activeComponent, setActiveComponent] =
        useState<ButtonState>("Forecast");

    const handleComponentChange = (componentName: ButtonState) => {
        setActiveComponent(componentName);
    };
    return (
        <div className="w-full flex flex-col justify-center">
            <ButtonContainer
                activeComponent={activeComponent}
                handleComponentChange={handleComponentChange}
            />
            <ForecastContainer activeComponent={activeComponent} />
        </div>
    );
};

export default TempContainer;
