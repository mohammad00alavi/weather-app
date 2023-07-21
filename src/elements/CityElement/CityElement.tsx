import React from "react";
import Provider from "@/context/Provider";
import { PagePropsTypes } from "@/types/PagePropsTypes";
import Layout from "@/components/Layout/Layout";
import DateAndLocation from "../DateAndLocation/DateAndLocation";
import TempContainer from "../TempContainer/TempContainer";
import CityTemplate from "./CityTemplate";
import CityInput from "@/components/CityInput/CityInput";

interface CityElementProps {
    pageProps: PagePropsTypes;
}

const CityElement: React.FC<CityElementProps> = ({ pageProps }) => {
    return (
        <Provider<PagePropsTypes> appProps={pageProps}>
            <CityInput />
            <Layout>
                <CityTemplate>
                    <DateAndLocation />
                    <TempContainer />
                </CityTemplate>
            </Layout>
        </Provider>
    );
};

export default CityElement;
