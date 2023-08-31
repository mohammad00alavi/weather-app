import React from "react";
import CityCard from "@/components/CityCard/CityCard";
import { useWindowSize } from "@/hooks/useWindowSize";
import { CONFIG } from "@/utils/config";

const Board = () => {
    const { isMobile } = useWindowSize();
    return (
        <section className="gap-4 grid grid-cols-2">
            {CONFIG.BOARD_CITIES.map((city) => (
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
