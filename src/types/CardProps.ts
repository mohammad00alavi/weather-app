import { ComponentWithChildren } from "./ComponentWithChildren";

export interface CardProps extends ComponentWithChildren {
    size: "compact" | "default" | "expanded";
    color: "blue" | "green" | "orange" | "gray";
}
