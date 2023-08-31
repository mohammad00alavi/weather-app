import { DayTemperature } from "@/types/DayTemperature";

const fullnameDays: string[] = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
];
const shorthandDays: string[] = [
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
];

function getDayName(date: Date, isMobile: boolean): string {
    return isMobile
        ? shorthandDays[date.getDay()]
        : fullnameDays[date.getDay()];
}

export const getMaxMinTempByDay = (
    data: {
        date: string;
        temp: number;
        weather: string;
        description: string;
    }[],
    isMobile: boolean
): DayTemperature[] => {
    const orderedDays = isMobile ? shorthandDays : fullnameDays;
    const today: number = new Date().getDay();
    const offset: number = orderedDays.indexOf(
        getDayName(new Date(), isMobile)
    );

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
        const dayName: string = getDayName(date, isMobile);
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
