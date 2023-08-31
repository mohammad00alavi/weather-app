import { CardProps } from "./CardProps";

export interface CityCardProps extends Omit<CardProps, "children"> {
    cityName: string;
}
