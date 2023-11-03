import React from 'react';

const SuiteCard = ({ suite, onCardClick }) => {
  return (
    <div className="suite-card" onClick={() => onCardClick(suite)}>
      <img src={suite.floorplan_img} alt={suite.name} className="suite-image" />
      <h3>{suite.name}</h3>
      <div className="suite-card-pricing flex-row">
        <p>{`Starting at ${suite.price}/mo`}</p>
        <p>{suite.bed} bd</p>
        <p>{suite.bath} ba</p>
        <p>{suite.sqft} sqft</p>
      </div>
      <button className="primary-btn">JOIN WAITLIST</button>
    </div>
  );
}

export default SuiteCard;
