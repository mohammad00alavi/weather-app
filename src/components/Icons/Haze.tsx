import React, { SVGProps } from "react";

const Haze = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M156.48 328c82.56-98.88 192-81.92 352-19.2 134.08 52.8 301.76 118.4 444.8-52.8a56 56 0 1 0-86.08-72c-87.04 104.32-173.44 77.12-320 20.48C433.92 160 220.8 76.16 70.72 256a56 56 0 1 0 86.08 71.68z m710.72 112c-87.04 104.32-173.44 77.12-320 20.48C433.92 416 220.8 332.16 70.72 512a56 56 0 1 0 86.08 71.68c82.56-98.88 192-81.92 352-19.2 135.04 52.8 302.72 118.72 445.76-52.8a56 56 0 1 0-86.08-71.68z m0 256c-87.04 104.32-173.44 77.12-320 20.48C433.92 672 220.8 588.16 70.72 768a56 56 0 1 0 86.08 71.68c82.56-98.88 192-81.92 352-19.2 135.04 52.8 302.72 118.72 445.76-52.8a56 56 0 1 0-86.08-71.68z" />
        </svg>
    );
};

export default Haze;