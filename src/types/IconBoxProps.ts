import { ReactNode } from "react";

export interface IconBoxProps {
    data?: number;
    tempMax?: number;
    tempMin?: number;
    icon: ReactNode;
    iconClasses: string;
    textClasses: string;
    status: string;
}
