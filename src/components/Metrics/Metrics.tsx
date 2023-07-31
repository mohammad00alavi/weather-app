import React from "react";
import { getMeasuring } from "../../utils/getMeasuring";
import { MetricsProps } from "@/types/MetricsProps";

const Metrics: React.FC<MetricsProps> = ({ status }) => {
    return <span className="text-base align-top">{getMeasuring(status)}</span>;
};

export default Metrics;
