import React from "react";
import InfoContainer from "./InfoContainer";
import ForecastContainer from "./ForecastContainer";

const TempContainer = () => {
    return (
        <div className="w-full">
            <ForecastContainer />
            {/* <InfoContainer /> */}
        </div>
    );
};

export default TempContainer;
