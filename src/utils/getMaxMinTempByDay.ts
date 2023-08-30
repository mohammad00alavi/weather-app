const orderedDays: string[] = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
];

function getDayName(date: Date): string {
    return orderedDays[date.getDay()];
}

interface DayTemperature {
    day: string;
    maxTemp: number | null;
    minTemp: number | null;
    status: string;
}

export const getMaxMinTempByDay = (
    data: {
        date: string;
        temp: number;
        weather: string;
        description: string;
    }[]
): DayTemperature[] => {
    const today: number = new Date().getDay();
    const offset: number = orderedDays.indexOf(getDayName(new Date()));

    const orderedData: DayTemperature[] = [];
    for (let i = 0; i < orderedDays.length; i++) {
        const dayIndex: number = (i + offset) % orderedDays.length;
        const dayName: string = orderedDays[dayIndex];

        orderedData.push({
            day: dayName,
            maxTemp: null,
            minTemp: null,
            status: "",
        });
    }

    data?.forEach((item) => {
        const date: Date = new Date(item.date);
        const dayName: string = getDayName(date);
        const orderedIndex: number = orderedDays.indexOf(dayName);

        if (orderedIndex !== -1) {
            const dataIndex: number =
                (orderedIndex - offset + orderedDays.length) %
                orderedDays.length;
            const dayData: DayTemperature | undefined = orderedData[dataIndex];

            if (dayData) {
                if (dayData.maxTemp === null || item.temp > dayData.maxTemp) {
                    dayData.maxTemp = Math.round(item.temp);
                }
                if (dayData.minTemp === null || item.temp < dayData.minTemp) {
                    dayData.minTemp = Math.round(item.temp);
                }
                dayData.status = item.weather.toLowerCase();
            }
        }
    });

    const filteredData: DayTemperature[] = orderedData
        .filter(
            (dayData) => dayData.maxTemp !== null && dayData.minTemp !== null
        )
        .filter((_, index) => index !== today);

    return filteredData;
};
