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
                <div onClick={closeModal} style={backdropStyle}>
                    <div onClick={e => e.stopPropagation()} style={modalStyle}>
                        <Content />
                    </div>
                </div>
            )}
        </div>
    );
};

const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 180,
    margin: '0 auto',
    padding: 30,
    position: 'relative',
    zIndex: 1001,
};

export default AppInfo;
