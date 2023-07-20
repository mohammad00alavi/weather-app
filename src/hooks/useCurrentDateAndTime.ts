import { useEffect, useState } from "react";
import { getDateAndTime } from "@/utils/getDateAndTime";

const useCurrentDateAndTime = () => {
    const [currentTime, setCurrentTime] = useState("");
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const updateDateAndTime = () => {
            const { currentTimeString, currentDateString } = getDateAndTime();
            setCurrentTime(currentTimeString);
            setCurrentDate(currentDateString);
        };

        updateDateAndTime();

        const intervalId = setInterval(updateDateAndTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return { currentTime, currentDate };
};

export default useCurrentDateAndTime;
