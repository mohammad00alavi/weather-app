import React from "react";
import Card from "@/components/Card/Card";
import CityCard from "@/components/CityCard/CityCard";
import { useWindowSize } from "@/hooks/useWindowSize";

const Board = () => {
    const { isMobile } = useWindowSize();
    const cities = [
        "fredrikstad",
        "oslo",
        "funchal",
        "warsaw",
        "tehran",
        "amsterdam",
    ];
    return (
        <section className="gap-4 grid grid-cols-2">
            {cities.map((city) => (
                <CityCard
                    key={city}
                    cityName={city}
                    color="blue"
                    size={isMobile ? "compact" : "expanded"}
                />
            ))}
        </section>
    );
};

export default Board;
