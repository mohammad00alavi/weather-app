import Icons from "@/components/Icons/Icons";
import { IconMap } from "@/types/IconMap";
import { WeatherInfoTypes } from "@/types/WeatherInfoTypes";
import { WeatherStatus } from "@/types/WeatherStatus";

const weatherStatusColors: WeatherStatus = {
    clear: "yellow",
    rain: "blue",
    clouds: "white",
};

const weatherInfoColors: WeatherInfoTypes = {
    pressure: "purple",
    humidity: "blue",
    wind: "red",
};

const weatherIconsMap: IconMap = {
    clouds: Icons.Cloud,
    clear: Icons.Sun,
    rain: Icons.Rain,
    pressure: Icons.Pressure,
    wind: Icons.Wind,
    humidity: Icons.Humidity,
};

export const CONFIG = {
    colors: { ...weatherStatusColors, ...weatherInfoColors },
    iconMap: weatherIconsMap,
};
