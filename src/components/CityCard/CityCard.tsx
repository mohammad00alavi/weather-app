import React, { useMemo } from "react";
import useCity from "@/hooks/useCity";
import Card from "../Card/Card";
import Link from "next/link";
import IconBox from "../InfoBoxItem";
import { getWeatherIcon } from "@/utils/getWeatherIcon";
import { CityCardProps } from "@/types/CityCardProps";

const CityCard = ({ cityName, size, color }: CityCardProps) => {
    const { cityData, error } = useCity(cityName);
    const cachedCityData = useMemo(() => cityData, [cityData]);

    if (!cachedCityData) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (cachedCityData) {
        return (
            <Link href={`/${cityName}`}>
                <Card size={size} color={color}>
                    <div className="flex justify-between items-center">
                        <h4 className="font-bold text-gray-700 text-sm lg:text-lg">
                            {cachedCityData?.city}
                        </h4>
                        <IconBox
                            data={Math.round(cachedCityData?.temp)}
                            icon={getWeatherIcon(
                                cachedCityData?.weather,
                                "info"
                            )}
                            status={"temp"}
                            iconClasses={
                                "flex flex-col items-center ml-6 md:ml-0"
                            }
                            textClasses={
                                "text-center text-lg lg:text-lg font-bold text-gray-700 text-sm"
                            }
                        />
                    </div>
                </Card>
            </Link>
        );
    }
};

export default CityCard;
