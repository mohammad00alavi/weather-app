import React from "react";
import Layout from "@/components/Layout/Layout";
import NotFoundTemplate from "./NotFoundTemplate";
import CityInput from "@/components/CityInput/CityInput";
import Heading from "@/components/Heading/Heading";
import CustomHead from "@/components/CustomHead/CustomHead";

const NotFoundElement = () => {
    return (
        <>
            <CustomHead
                title="Page not found - Weather App"
                description="Page not found - Weather App"
            />
            <Layout>
                <CityInput />
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
