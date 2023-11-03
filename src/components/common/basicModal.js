import React from 'react';
import Modal from 'react-modal';
import { CloseIcon } from './modalIcons';

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -45%)',
        width: '60%', // Set width
        height: 'auto',
        overflow: 'hidden', // Hide all scroll bars
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)', // Semi-transparent overlay
    },
};

const BasicModal = ({ isOpen, onRequestClose, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Modal"
            style={modalStyles}
        >
            <button onClick={onRequestClose} className="close-modal-btn">
                <CloseIcon />
            </button>
            {children}
        </Modal>
    );
};

export default BasicModal;
