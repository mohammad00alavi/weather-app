import SearchCity from "@/components/Search/SearchCity";
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
                <SearchCity />
                <HomeTemplate>
                    <Board />
                    <AppInfo />
                </HomeTemplate>
            </Layout>
        </>
    );
};

export default HomeElement;
