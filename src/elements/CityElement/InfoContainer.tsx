import IconBox from "@/components/InfoBoxItem/IconBox";
import { useWeatherInfo } from "@/hooks/useWeatherInfo";
import { WeatherInfo } from "@/types/CityDataTypes";
import { WeatherInfoTypes } from "@/types/WeatherInfoTypes";
import { getWeatherIcon } from "@/utils/getWeatherIcon";

const InfoContainer = () => {
    const { humidity, pressure, windSpeed } = useWeatherInfo<WeatherInfo>();
    const infoObject = {
        humidity: humidity,
        pressure: pressure,
        wind: windSpeed,
    };
    return (
        <div className="flex flex-row p-2 md:mr-4 self-end">
            {Object.entries(infoObject).map(([key, value]) => (
                <IconBox
                    key={key}
                    data={value}
                    status={key}
                    icon={getWeatherIcon(key as keyof WeatherInfoTypes, "info")}
                    iconClasses="flex flex-col mx-3 md:mx-6 rounded self-center"
                    textClasses="text-center md:text-2xl text-shadow"
                />
            ))}
        </div>
    );
};

export default InfoContainer;
