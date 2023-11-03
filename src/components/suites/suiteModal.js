// CustomModal.js

import React from 'react';
import Modal from 'react-modal';
import SuiteCarousel from './suiteCarousel.js';

// Ensure you set the app element in your entry file (like gatsby-browser.js)
// ReactModal.setAppElement('#___gatsby');

const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50%', // Set width
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
            <button onClick={onRequestClose}>Close</button>
            <SuiteCarousel />
        </Modal>
    );
};

export default SuiteModal;
