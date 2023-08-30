import React from "react";
import dynamic from "next/dynamic";
import { useWindowSize } from "@/hooks/useWindowSize";
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
    const temps = data?.map((item) => Math.round(item.temp));
    const { windowSize } = useWindowSize();
    const width =
        windowSize.width &&
        (windowSize.width > 1200
            ? windowSize.width / 2
            : windowSize.width * 0.9);

    const chartData = [
        {
            x: dates,
            y: temps,
            type: "scatter",
            text: temps,
            mode: "lines+text",
            fill: "tozeroy",
            marker: { color: "orange" },
            textposition: "top center",
            textfont: { size: 12 },
            hoverinfo: "none",
        },
    ];
    // TODO - fix the textfont hide problem and type error
    const layout = {
        xaxis: {
            showgrid: false,
            zeroline: false,
            showline: false,
            showticklabels: true,
        },
        yaxis: {
            showgrid: false,
            zeroline: false,
            showline: false,
            showticklabels: false,
        },
        showlegend: false,
        height: 140,
        width: width,
        margin: { t: 20, b: 22, l: 0, r: 0, pad: 5 },
    };
    const config: Partial<Plotly.Config> = {
        staticPlot: true,
        displayModeBar: false,
    };

    return <Plotly data={chartData} layout={layout} config={config} />;
};

export default Chart;
