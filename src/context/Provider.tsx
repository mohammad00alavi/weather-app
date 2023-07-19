import React, { ReactNode, useContext, useState } from "react";
import { CityContext } from "./CityContext";
import { CityData } from "@/types/CityData";
import { ProviderProps } from "@/types/ProviderProps";

const Provider: React.FC<ProviderProps> = ({ children }) => {
    const [cityName, setCityName] = useState<string>("");
    const [cityData, setCityData] = useState<CityData | undefined>();

    return (
        <CityContext.Provider
            value={{ cityName, cityData, setCityData, setCityName }}
        >
            {children}
        </CityContext.Provider>
    );
};

export default Provider;
