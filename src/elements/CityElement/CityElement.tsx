import CityName from "@/components/CityName/CityName";
import Cover from "@/components/Cover/Cover";
import Provider from "@/context/Provider";
import { PagePropsTypes } from "@/types/PagePropsTypes";
import React from "react";
import Date from "@/components/Date/Date";

interface CityElementProps {
    pageProps: PagePropsTypes;
}

const CityElement: React.FC<CityElementProps> = ({ pageProps }) => {
    return (
        <Provider<PagePropsTypes> appProps={pageProps}>
            <CityName />
            <Date />
            <Cover />
        </Provider>
    );
};

export default CityElement;
