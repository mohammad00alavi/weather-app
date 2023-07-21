import React from "react";
import InfoLink from "./InfoLink";
import Icons from "../Icons/Icons";

const Content = () => {
    return (
        <div className="flex flex-col gap-y-4 items-center">
            <p>Developed by Mohammad Alavi</p>
            <InfoLink
                text="Linkedin"
                href="https://www.linkedin.com/in/mohammad00alavi/"
                icon={<Icons.Linkedin />}
            />
            <InfoLink
                text="Github"
                href="https://github.com/mohammad00alavi"
                icon={<Icons.Github />}
            />
        </div>
    );
};

export default Content;
