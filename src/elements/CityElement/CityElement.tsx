import React from "react";
import Provider from "@/context/Provider";
import { PagePropsTypes } from "@/types/PagePropsTypes";
import Layout from "@/components/Layout/Layout";
import DateAndLocation from "../DateAndLocation/DateAndLocation";
import TempContainer from "../TempContainer/TempContainer";

interface CityElementProps {
    pageProps: PagePropsTypes;
}

const CityElement: React.FC<CityElementProps> = ({ pageProps }) => {
    return (
        <Provider<PagePropsTypes> appProps={pageProps}>
            <Layout>
                <DateAndLocation />
                <TempContainer />
            </Layout>
        </Provider>
    );
};

export default CityElement;
