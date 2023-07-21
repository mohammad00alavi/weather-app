export const getDateAndTime = () => {
    const now = new Date();

    // Get current time
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const amPm = hours >= 12 ? "PM" : "AM";
    const twelveHourFormat = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    const currentTimeString = `${twelveHourFormat}:${
        minutes < 10 ? "0" + minutes : minutes
    } ${amPm}`;

    // Get current date
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    } as const;

    const currentDateString = now.toLocaleDateString("en-US", options);
    return { currentTimeString, currentDateString };
};
