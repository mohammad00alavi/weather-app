import React from "react";
import Provider from "@/context/Provider";
import { PagePropsTypes } from "@/types/PagePropsTypes";
import Layout from "@/components/Layout/Layout";
import DateAndLocation from "./DateAndLocation";
import TempContainer from "./TempContainer";
import CityTemplate from "./CityTemplate";
import CityInput from "@/components/CityInput/CityInput";
import CustomHead from "@/components/CustomHead/CustomHead";
import ForecastContainer from "./ForecastContainer";
import { useWindowSize } from "@/hooks/useWindowSize";

interface CityElementProps {
    pageProps: PagePropsTypes;
}

const CityElement: React.FC<CityElementProps> = ({ pageProps }) => {
    const city = pageProps.cityData?.city;
    const { isMobile } = useWindowSize();
    return (
        <>
            <CustomHead
                title={`${city} Weather | Weather App`}
                description={`${city} Weather | The Weather App`}
            />
            <Provider<PagePropsTypes> appProps={pageProps}>
                <Layout>
                    <CityInput />
                    <CityTemplate>
                        <DateAndLocation />
                        {isMobile && <ForecastContainer />}
                        <TempContainer />
                    </CityTemplate>
                </Layout>
            </Provider>
        </>
    );
};

export default CityElement;
