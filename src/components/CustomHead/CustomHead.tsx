import Head from "next/head";
import React from "react";

interface CustomHeadProps {
    title: string;
    description: string;
}

const CustomHead: React.FC<CustomHeadProps> = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
};

export default CustomHead;
