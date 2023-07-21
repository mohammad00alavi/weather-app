import IconBox from "@/components/InfoBoxItem/IconBox";
import { useWeatherInfo } from "@/hooks/useWeatherInfo";
import { WeatherInfo } from "@/types/CityDataTypes";
import { WeatherInfoTypes } from "@/types/WeatherInfoTypes";
import { getWeatherIcon } from "@/utils/getWeatherIcon";

const InfoContainer = () => {
    const { humidity, pressure, windSpeed, windDeg } =
        useWeatherInfo<WeatherInfo>();
    const infoObject = {
        humidity: humidity,
        pressure: pressure,
        wind: windDeg,
    };
    return (
        <div className="flex flex-row">
            {Object.entries(infoObject).map(([key, value]) => (
                <IconBox
                    key={key}
                    data={value}
                    icon={getWeatherIcon(key as keyof WeatherInfoTypes, "info")}
                    className={"flex flex-col m-4"}
                />
            ))}
        </div>
    );
};

export default InfoContainer;
