import CityInput from "@/components/CityInput/CityInput";
import Layout from "@/components/Layout/Layout";
import HomeTemplate from "./HomeTemplate";
import Heading from "@/components/Heading/Heading";
import AppInfo from "@/components/AppInfo/AppInfo";
import CustomHead from "@/components/CustomHead/CustomHead";
import Board from "./Board";

const HomeElement = () => {
    return (
        <>
            <CustomHead title="Weather App" description="The Weather App" />
            <Layout>
                <CityInput />
                <HomeTemplate>
                    <Heading
                        text="Weather App"
                        className="text-4xl text-white"
                        type="h1"
                    />
                    <Board />
                    <AppInfo />
                </HomeTemplate>
            </Layout>
        </>
    );
};

export default HomeElement;
