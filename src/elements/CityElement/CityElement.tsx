import React from "react";
import Provider from "@/context/Provider";
import { PagePropsTypes } from "@/types/PagePropsTypes";
import Layout from "@/components/Layout/Layout";
import DateAndLocation from "./DateAndLocation";
import TempContainer from "./TempContainer";
import CityTemplate from "./CityTemplate";
import SearchCity from "@/components/Search/SearchCity";
import CustomHead from "@/components/CustomHead/CustomHead";

interface CityElementProps {
    pageProps: PagePropsTypes;
}

const CityElement: React.FC<CityElementProps> = ({ pageProps }) => {
    const city = pageProps.cityData?.city;
    return (
        <>
            <CustomHead
                title={`${city} Weather | Weather App`}
                description={`${city} Weather | The Weather App`}
            />
            <Provider<PagePropsTypes> appProps={pageProps}>
                <Layout>
                    <SearchCity />
                    <CityTemplate>
                        <DateAndLocation />
                        <TempContainer />
                    </CityTemplate>
                </Layout>
            </Provider>
        </>
    );
};

export default CityElement;
