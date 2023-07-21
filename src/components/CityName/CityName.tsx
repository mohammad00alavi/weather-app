import React from "react";
import { useLocation } from "@/hooks/useLocation";
import { Location } from "@/types/CityDataTypes";

const CityName = () => {
    const { city, county } = useLocation<Location>();
    return (
        <div className="">
            <h1>{city}</h1>
            <h2>{county}</h2>
        </div>
    );
};

export default CityName;
