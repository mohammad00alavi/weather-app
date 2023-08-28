import React from "react";
import Card from "@/components/Card/Card";
import CityCard from "@/components/CityCard/CityCard";

const Board = () => {
    const cities = ["fredrikstad", "funchal", "oslo", "warsaw", "lublin"];
    return (
        <div>
          <CityCard cityName="oslo"/>
        </div>
    );
};

export default Board;
