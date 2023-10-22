import React from 'react';
import './UnlockSlider.css'; 

const UnlockSlider = ({ onUnlock }) => {
  const handleSlide = (event) => {
    const trackWidth = event.currentTarget.offsetWidth;
    const newLeft = event.clientX - event.currentTarget.getBoundingClientRect().left;
    if (newLeft >= trackWidth - 50) {
      onUnlock();
    }
  };

  return (
    <div className="slider-container" onClick={handleSlide}> 
      <div className="slider-track">
        <div className="slider-thumb" />
      </div>
    </div>
  );
};

export default UnlockSlider;