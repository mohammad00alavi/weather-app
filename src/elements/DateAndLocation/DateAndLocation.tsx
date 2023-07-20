import React from "react";
import Date from "@/components/Date/Date";
import CityName from "@/components/CityName/CityName";

const DateAndLocation = () => {
    return (
        <div className="flex justify-between">
            <Date />
            <CityName />
        </div>
    );
};

export default DateAndLocation;
