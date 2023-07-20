import React, { SVGProps } from "react";
import Cloud from "./Cloud";
import CloudSun from "./CloudSun";
import Humidity from "./Humidity";
import Rain from "./Rain";
import Snow from "./Snow";
import Sun from "./Sun";
import Temperature from "./Temperature";

interface IconsProps extends SVGProps<SVGSVGElement> {}

const Icons = {
    Cloud: (props: IconsProps) => <Cloud {...props} />,
    CloudSun: (props: IconsProps) => <CloudSun {...props} />,
    Humidity: (props: IconsProps) => <Humidity {...props} />,
    Rain: (props: IconsProps) => <Rain {...props} />,
    Snow: (props: IconsProps) => <Snow {...props} />,
    Sun: (props: IconsProps) => <Sun {...props} />,
    Temperature: (props: IconsProps) => <Temperature {...props} />,
};

export default Icons;
