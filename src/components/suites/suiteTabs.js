import React, { useState } from "react";
import SuiteCard from './suiteCard.js';

const Tabs = ({ data }) => {
    const [activeTab, setActiveTab] = useState(data[0].label);

    const handleClick = (tab) => {
        setActiveTab(tab);
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
                                {tab.content.map((suite, Index) => (
                                    <SuiteCard key={Index} suite={suite} />
                                ))}
                            </div>
                        )
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default Tabs;
