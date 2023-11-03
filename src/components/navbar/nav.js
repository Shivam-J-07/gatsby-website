import React, { useState, useEffect } from 'react';
import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';

const ResponsiveNav = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 1023px)').matches);
      console.log('isMobile: ', isMobile);
    };

    // Call the function to set the initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </>
  );
};

export default ResponsiveNav;
