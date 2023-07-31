export const getMeasuring = (status: string): string => {
    switch (status) {
        case "temp":
            return "°C";
        case "wind":
            return "m/s";
        case "humidity":
            return "%";
        case "pressure":
            return "hPa";
        default:
            return "";
    }
};
