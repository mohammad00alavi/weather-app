import React from "react";
import Layout from "@/components/Layout/Layout";
import NotFoundTemplate from "./NotFoundTemplate";
import CityInput from "@/components/CityInput/CityInput";
import Heading from "@/components/Heading/Heading";

const NotFoundElement = () => {
    return (
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
    );
};

export default NotFoundElement;
