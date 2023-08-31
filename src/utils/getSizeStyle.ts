export const getSizeStyle = (size: string) => {
    switch (size) {
        case "compact":
            return "w-40 h-20 lg:w-44 lg:h-24";
        case "default":
            return "w-44 h-24 lg:w-48 lg:h-28";
        case "expanded":
            return "w-48 h-28 lg:w-64 lg:h-32";
        default:
            return "w-40 h-20 lg:w-44 lg:h-24";
    }
};
