import React, { useState, useEffect } from 'react';

export default function ScrollToUP() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  });
  return (
    <div>
      <button
        className={`toUpBtn ${isVisible ? 'toUpVisible' : 'toUpNotVisible'}`}
        onClick={scrollToTop}
      >
        Go to top
      </button>
    </div>
  );
}
