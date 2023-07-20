import useCurrentDateAndTime from "@/hooks/useCurrentDateAndTime";
import React from "react";

const Date = () => {
    const { currentDate, currentTime } = useCurrentDateAndTime();
    return (
        <div>
            <h2>{currentTime}</h2>
            <p>{currentDate}</p>
        </div>
    );
};

export default Date;
