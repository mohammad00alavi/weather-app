import React from "react";
import Layout from "@/components/Layout/Layout";
import NotFoundTemplate from "./NotFoundTemplate";
import SearchCity from "@/components/Search/SearchCity";
import Heading from "@/components/Heading/Heading";
import CustomHead from "@/components/CustomHead/CustomHead";
import SearchProvider from "@/context/SearchContext/Provider";

const NotFoundElement = () => {
    return (
        <>
            <CustomHead
                title="Page not found - Weather App"
                description="Page not found - Weather App"
            />
            <Layout>
                <SearchProvider>
                    <SearchCity />
                </SearchProvider>
                <NotFoundTemplate>
                    <Heading
                        text="404 - City Not Found :("
                        type="h1"
                        className="text-2xl text-white text-shadow"
                    />
                </NotFoundTemplate>
            </Layout>
        </>
    );
};

export default NotFoundElement;
