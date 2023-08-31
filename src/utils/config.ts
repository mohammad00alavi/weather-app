import { weatherInfoColors } from "./weatherInfoColors";
import { weatherStatusColors } from "./weatherStatusColors";
import { weatherIconsMap } from "./weatherIconsMap";

export const CONFIG = {
    COLORS: { ...weatherStatusColors, ...weatherInfoColors },
    ICON_MAP: weatherIconsMap,
    BOARD_CITIES: [
        "fredrikstad",
        "oslo",
        "funchal",
        "warsaw",
        "tehran",
        "amsterdam",
    ],
};
