import React from "react";
import dynamic from "next/dynamic";
const Plotly = dynamic(() => import("react-plotly.js"), { ssr: false });

interface WeatherData {
    date: string;
    temp: number;
    weather: string;
    description: string;
}

interface ChartProps {
    data: WeatherData[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
    const dates = data?.map((item) => item.date);
    const temps = data?.map((item) => item.temp);

    const chartData = [
        {
            x: dates,
            y: temps,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "blue" },
        },
    ];

    const layout = {
        title: "Temperature Forecast",
        xaxis: {
            title: "Date",
        },
        yaxis: {
            title: "Temperature (°C)",
        },
    };

    return (
        <div>
            <Plotly data={chartData} layout={layout} />;
        </div>
    );
};

export default Chart;
