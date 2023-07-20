import React from "react";
import Provider from "@/context/Provider";
import { PagePropsTypes } from "@/types/PagePropsTypes";
import Layout from "@/components/Layout/Layout";
import DateAndLocation from "../DateAndLocation/DateAndLocation";

interface CityElementProps {
    pageProps: PagePropsTypes;
}

const CityElement: React.FC<CityElementProps> = ({ pageProps }) => {
    return (
        <Provider<PagePropsTypes> appProps={pageProps}>
            <Layout>
                <DateAndLocation />
            </Layout>
        </Provider>
    );
};

export default CityElement;
