import Icons from "@/components/Icons/Icons";
import { getIconColor } from "./getIconColor";

export const getWeatherIcon = (weather: string, className: string) => {
    const status = weather.toLowerCase();
    switch (status) {
        case "clouds":
            return (
                <Icons.Cloud
                    className={className}
                    fill={getIconColor(status)}
                />
            );
        case "clear":
            return (
                <Icons.Sun className={className} fill={getIconColor(status)} />
            );
        case "rain":
            return (
                <Icons.Rain className={className} fill={getIconColor(status)} />
            );
        case "wind":
            return (
                <Icons.Wind className={className} fill={getIconColor(status)} />
            );
        case "humidity":
            return (
                <Icons.Humidity
                    className={className}
                    fill={getIconColor(status)}
                />
            );
        case "pressure":
            return (
                <Icons.Pressure
                    className={className}
                    fill={getIconColor(status)}
                />
            );
        default:
            return <p>Icon Not Found</p>;
    }
};
