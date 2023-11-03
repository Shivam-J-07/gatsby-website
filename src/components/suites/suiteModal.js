// CustomModal.js

import React from 'react';
import BasicModal from '../common/basicModal';
import SuiteCarousel from './suiteCarousel';

const SuiteModal = ({ isOpen, onRequestClose, content }) => {
    return (
        <BasicModal isOpen={isOpen} onRequestClose={onRequestClose}>
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
        </BasicModal>
    );
};


export default SuiteModal;

