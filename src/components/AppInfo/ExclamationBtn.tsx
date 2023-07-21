import React from "react";
import Icons from "../Icons/Icons";

interface ExclamationBtnProps {
    onClick: () => void;
}

const ExclamationBtn: React.FC<ExclamationBtnProps> = ({ onClick }) => {
    return (
        <div
            onClick={onClick}
            className="rounded-full bg-white p-2 w-8 h-8 hover:w-12 hover:h-12 duration-100 flex justify-center items-center cursor-pointer absolute left-4 bottom-4"
        >
            <Icons.Exclamation className="w-6 h-6" />
        </div>
    );
};

export default ExclamationBtn;
