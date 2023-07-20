import { useEffect, useState } from "react";

const useCurrentDateAndTime = () => {
    const [currentTime, setCurrentTime] = useState("");
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();

            // Get current time
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const amPm = hours >= 12 ? "PM" : "AM";
            const twelveHourFormat =
                hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
            const currentTimeString = `${twelveHourFormat}:${
                minutes < 10 ? "0" + minutes : minutes
            } ${amPm}`;
            setCurrentTime(currentTimeString);

            // Get current date
            const options = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            } as const;

            const currentDateString = now.toLocaleDateString("en-US", options);
            setCurrentDate(currentDateString);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return { currentTime, currentDate };
};

export default useCurrentDateAndTime;
