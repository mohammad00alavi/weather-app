import React from "react";
import dynamic from "next/dynamic";
import { useWindowSize } from "@/hooks/useWindowSize";
import { ForecastItem } from "@/types/ForecastItem";
const Plotly = dynamic(() => import("react-plotly.js"), { ssr: false });

interface ChartProps {
    data: ForecastItem[];
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
            text: temps,
            mode: "lines+text",
            fill: "tozeroy",
            marker: { color: "purple" },
            textposition: "top center",
            textfont: { size: 12, color: "white" },
            hoverinfo: "none",
        },
    ];
    const layout = {
        xaxis: {
            showgrid: false,
            zeroline: false,
            showline: false,
            showticklabels: true,
            tickfont: { color: "white" },
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
        margin: {
            t: 20,
            b: 22,
            l: 20,
            r: 20,
            pad: 5,
        },
        plot_bgcolor: "rgba(0, 0, 0, 0)",
        paper_bgcolor: "rgba(0, 0, 0, 0)",
    };
    const config: Partial<Plotly.Config> = {
        staticPlot: true,
        displayModeBar: false,
    };

    return <Plotly data={chartData} layout={layout} config={config} />;
};

export default Chart;
