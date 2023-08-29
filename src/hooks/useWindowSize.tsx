import { useState, useEffect } from "react";

type WindowSize = {
    width: number | undefined;
    height: number | undefined;
};

type Types = {
    windowSize: WindowSize;
    isMobile: boolean;
};

export const useWindowSize = (): Types => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    let isMobile: boolean = false;
    if (windowSize?.width) {
        isMobile = windowSize.width >= 768 ? false : true;
    }

    return { windowSize, isMobile };
};
