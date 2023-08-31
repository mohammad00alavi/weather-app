import useCurrentDateAndTime from "@/hooks/useCurrentDateAndTime";
import React from "react";

const Date = () => {
    const { currentDate, currentTime } = useCurrentDateAndTime();
    return (
        <div className="flex flex-col gap-2 items-center lg:items-start">
            <h2 className="text-lg text-white text-shadow">{currentTime}</h2>
            <p className="text-lg text-white text-shadow text-center md:text-left">{currentDate}</p>
        </div>
    );
};

export default Date;
