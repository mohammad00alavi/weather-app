import { WeatherStatus } from "@/types/WeatherStatus";
import { CONFIG } from "./config";
import { WeatherInfoTypes } from "@/types/WeatherInfoTypes";

export const getIconColor = (
    status: keyof WeatherStatus | keyof WeatherInfoTypes
):
    | (
          | WeatherStatus[keyof WeatherStatus]
          | WeatherInfoTypes[keyof WeatherInfoTypes]
      )
    | undefined => {
    if (status in CONFIG.COLORS) {
        return CONFIG.COLORS[status];
    } else {
        return undefined;
    }
};
