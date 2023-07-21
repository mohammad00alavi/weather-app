import Icons from "@/components/Icons/Icons";

export const getWeatherIcon = (weather: string) => {
    const status = weather.toLowerCase();
    console.log(status)
    switch (status) {
        case "clouds":
            return <Icons.Cloud className="main" fill="blue" />;
        case "clear":
            return <Icons.Sun />;
        case "rain":
            return <Icons.Rain />;
        default:
            return <p>Icon Not Found</p>;
    }
};
