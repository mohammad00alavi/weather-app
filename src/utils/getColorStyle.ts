export const getColorStyle = (color: string) => {
    switch (color) {
        case "blue":
            return "bg-sky-300";
        case "green":
            return "bg-green-300";
        case "orange":
            return "bg-orange-400";
        case "gray":
            return "bg-gray-500";
        default:
            return "bg-gray-500";
    }
};
