import { useState, useEffect, useRef } from 'react';

const useStickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setIsSticky(headerRef.current.getBoundingClientRect().top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isSticky, headerRef };
};

export default useStickyHeader;
