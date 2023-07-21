import React from "react";
import Date from "@/components/Date/Date";
import CityName from "@/components/CityName/CityName";

const DateAndLocation = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-4 mt-8 md:mt-0">
            <Date />
            <CityName />
        </div>
    );
};

export default DateAndLocation;
