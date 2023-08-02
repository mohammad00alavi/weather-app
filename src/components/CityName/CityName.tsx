import React from "react";
import { useLocation } from "@/hooks/useLocation";
import { Location } from "@/types/CityDataTypes";

const CityName = () => {
    const { city, county } = useLocation<Location>();
    return (
        <div className="mt-8 md:mr-8 flex flex-col">
            <h1 className="text-4xl text-cyan-300 text-shadow">
                {city},{" "}
                <span className="text-lg font-bold text-cyan-300 text-shadow">{county}</span>
            </h1>
        </div>
    );
};

export default CityName;
