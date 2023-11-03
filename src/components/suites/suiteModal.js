// CustomModal.js

import React from 'react';
import Modal from 'react-modal';
import SuiteCarousel from './suiteCarousel.js';
import { CloseIcon } from '../common/ModalIcons.js';
// Ensure you set the app element in your entry file (like gatsby-browser.js)
// ReactModal.setAppElement('#___gatsby');

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -45%)',
        width: '60%', // Set width
        height: 'auto', // Set height
        overflow: 'hidden', // Hide all scroll bars
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)', // Semi-transparent overlay
    },
};

const SuiteModal = ({ isOpen, onRequestClose, content }) => {
    console.log(content)
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Suite Modal"
            style={modalStyles}
        >
            <button onClick={onRequestClose} className="close-modal-btn">
                <CloseIcon /> {/* Use the SVG component here */}
            </button>
            <div className="flex-row suite-modal-heading">
                <div className="flex-row">
                    <p>{content.bed} bd</p>
                    <p>{content.bath} ba</p>
                    <p>{content.sqft} sqft</p>
                </div>
                <h2>{content.name}</h2>
                <p>Starting at ${content.price}/mo</p>
            </div>
            <SuiteCarousel />
        </Modal>
    );
};

export default SuiteModal;
