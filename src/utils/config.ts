import { weatherInfoColors } from "./weatherInfoColors";
import { weatherStatusColors } from "./weatherStatusColors";
import { weatherIconsMap } from "./weatherIconsMap";

export const CONFIG = {
    colors: { ...weatherStatusColors, ...weatherInfoColors },
    iconMap: weatherIconsMap,
};
