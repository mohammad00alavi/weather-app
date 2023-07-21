import React, { SVGProps } from "react";
import Cloud from "./Cloud";
import CloudSun from "./CloudSun";
import Humidity from "./Humidity";
import Rain from "./Rain";
import Snow from "./Snow";
import Sun from "./Sun";
import Temperature from "./Temperature";
import Wind from "./Wind";
import Pressure from "./Pressure";
import Exclamation from "./Exclamation";
import Linkedin from "./Linkedin";
import Github from "./Github";

interface IconsProps extends SVGProps<SVGSVGElement> {}

const Icons = {
    Cloud: (props: IconsProps) => <Cloud {...props} />,
    CloudSun: (props: IconsProps) => <CloudSun {...props} />,
    Humidity: (props: IconsProps) => <Humidity {...props} />,
    Rain: (props: IconsProps) => <Rain {...props} />,
    Snow: (props: IconsProps) => <Snow {...props} />,
    Sun: (props: IconsProps) => <Sun {...props} />,
    Temperature: (props: IconsProps) => <Temperature {...props} />,
    Wind: (props: IconsProps) => <Wind {...props} />,
    Pressure: (props: IconsProps) => <Pressure {...props} />,
    Exclamation: (props: IconsProps) => <Exclamation {...props} />,
    Linkedin: (props: IconsProps) => <Linkedin {...props} />,
    Github: (props: IconsProps) => <Github {...props} />,
};

export default Icons;
