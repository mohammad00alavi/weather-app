import { SVGProps } from "react";

export interface IconMap {
    [index: string]: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}
