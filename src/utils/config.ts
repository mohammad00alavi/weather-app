import Icons from "@/components/Icons/Icons";
import { IconMap } from "@/types/IconMap";
import { WeatherInfoTypes } from "@/types/WeatherInfoTypes";
import { WeatherStatus } from "@/types/WeatherStatus";

const weatherStatusColors: WeatherStatus = {
    clear: "#FFFF00",
    rain: "#03A9F4",
    clouds: "white",
};

const weatherInfoColors: WeatherInfoTypes = {
    pressure: "#9B5FD0",
    humidity: "#4AF0FF",
    wind: "#D3E3EC",
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
