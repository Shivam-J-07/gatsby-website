import React from 'react';
import useStickyHeader from '../../hooks/useStickyHeader';
import '../../styles/home.css'; // Make sure to import your CSS file

const DesktopNav = () => {
  const { isSticky, headerRef } = useStickyHeader();

  return (
    <div ref={headerRef} className={`nav flex-row ${isSticky ? 'sticky' : ''}`}>
      <div className="nav-header-container">
        <p className="nav-header">399 Stan Bailie</p>
      </div> 
      <div className="nav-link-container flex-row">
        <a className="nav-link">About Us</a>
        <a className="nav-link">Suites</a>
        <a className="nav-link">Amenities</a>
        <a className="nav-link">Gallery</a>
        <a className="nav-link">Neighbourhood</a>
      </div>
      <div className="nav-btn-container flex-row">
        <button className="nav-btn primary-btn">Schedule a tour</button>
        <button className="nav-btn primary-btn">Apply</button>
      </div>
    </div>
  );
};

export default DesktopNav;
