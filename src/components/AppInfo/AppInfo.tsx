import React, { useState } from "react";
import ExclamationBtn from "./ExclamationBtn";
import Content from "./Content";

const AppInfo = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <ExclamationBtn onClick={openModal} />
            {modalOpen && (
                <div
                    onClick={closeModal}
                    className="fixed top-0 bottom-0 left-0 right-0 bg-white bg-opacity-40 p-10 z-50 flex justify-center items-center"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded w-max-48 h-min-24 relative z-50 p-8 my-0 mx-auto"
                    >
                        <Content />
                    </div>
                </div>
            )}
        </div>
    );
};

export default AppInfo;
