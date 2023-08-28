import React from "react";
import useCity from "@/hooks/useCity";
import Card from "../Card/Card";

interface CardProps {
    cityName: string;
}

const CityCard = ({ cityName }: CardProps) => {
    const city = useCity(cityName);

    if (city.loading) {
        return <div>Loading...</div>;
    }
    const cityData = city.cityData;
    console.log(cityData, 'ann')
    return (
        <Card size="compact" color="blue">
            <div>
                <h4>{cityData?.city}</h4>
                <p>{cityData?.temp}</p>
            </div>
            <div>
                <h4>min: {cityData?.temp_min}</h4>
                <p>max: {cityData?.temp_max}</p>
            </div>
        </Card>
    );
};

export default CityCard;
