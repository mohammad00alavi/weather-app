import useCurrentDateAndTime from "@/hooks/useCurrentDateAndTime";
import React from "react";

const Date = () => {
    const { currentDate, currentTime } = useCurrentDateAndTime();
    return (
        <div className="mt-8 md:ml-8">
            <h2 className="text-6xl text-shadow">{currentTime}</h2>
            <p className="mt-4 text-xl text-shadow text-center md:text-left">{currentDate}</p>
        </div>
    );
};

export default Date;
