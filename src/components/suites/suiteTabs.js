import React, { useState } from "react";
import SuiteCard from './suiteCard.js';
import SuiteModal from './suiteModal.js'; // Import the modal component you'll be using

const SuiteTabs = ({ data }) => {
    const [activeTab, setActiveTab] = useState(data[0].label);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSuite, setSelectedSuite] = useState(null);

    const handleClick = (tab) => {
        setActiveTab(tab);
    }

    const handleCardClick = (suite) => {
        setSelectedSuite(suite);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSuite(null); // Optional: Clear the selected suite when closing the modal
    }

    return (
        <div className="max-width flex-col">
            <div className="suite-tabs">
                {data.map((tab, index) => (
                    <button key={index} onClick={() => handleClick(tab.label)}
                        className={activeTab === tab.label ? 'active' : ''}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="max-width">
                {data.map((tab, index) => {
                    if (tab.label === activeTab) {
                        return (
                            <div key={index} className="suite-card-container flex-row">
                                {tab.content.map((suite, sIndex) => (
                                    <SuiteCard key={sIndex} suite={suite} onCardClick={handleCardClick} />
                                ))}
                            </div>
                        )
                    }
                    return null;
                })}
            </div>

            {/* The modal component */}
            {selectedSuite && (
                <SuiteModal isOpen={isModalOpen} onRequestClose={closeModal} content={selectedSuite} />
            )}
        </div>
    )
}

export default SuiteTabs;
