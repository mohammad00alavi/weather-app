import React from "react";
import { useLocation } from "@/hooks/useLocation";
import { Location } from "@/types/CityDataTypes";

const CityName = () => {
    const { city, county } = useLocation<Location>();
    return (
        <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-2xl text-white text-shadow">
                {city},{" "}
                <span className="text-lg font-bold text-white text-shadow">{county}</span>
            </h1>
        </div>
    );
};

export default CityName;
