import React from "react";
import useCity from "@/hooks/useCity";
import Card, { CardProps } from "../Card/Card";
import Link from "next/link";
import IconBox from "../InfoBoxItem";
import { getWeatherIcon } from "@/utils/getWeatherIcon";

interface CityCardProps extends Omit<CardProps, "children"> {
    cityName: string;
}

const CityCard = ({ cityName, size, color }: CityCardProps) => {
    const city = useCity(cityName);

    if (city.loading) {
        return <div>Loading...</div>;
    }
    const cityData = city.cityData;
    console.log(cityData, "ann");
    return (
        <Link href={`/${cityName}`}>
            <Card size={size} color={color}>
                <div className="flex justify-between items-center">
                    <h4 className="font-bold text-gray-700">
                        {cityData?.city}
                    </h4>
                    <IconBox
                        data={Math.round(cityData?.temp)}
                        icon={getWeatherIcon(cityData?.weather, "info")}
                        status={"temp"}
                        iconClasses={"flex flex-col items-center ml-6 md:ml-0"}
                        textClasses={
                            "text-center text-lg font-bold text-gray-700"
                        }
                    />
                </div>
                {/* <div className="flex justify-between">
                    <h4>min: {cityData?.temp_min}</h4>
                    <p>max: {cityData?.temp_max}</p>
                </div> */}
            </Card>
        </Link>
    );
};

export default CityCard;
