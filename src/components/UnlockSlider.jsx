import React from 'react';
import Draggable from 'react-draggable';
import './UnlockSlider.css';

const UnlockSlider = ({ onUnlock }) => {

  const handleStop = (event, data) => {
    if (data.x >= 250) { 
      onUnlock();
    }
  };

  return (
    <div className="slider-container">
      <div className="slider-track">
        <Draggable 
          axis="x"
          bounds="parent"
          onStop={handleStop}
        >
          <div className="slider-thumb" />
        </Draggable>
      </div>
    </div>
  );
};

export default UnlockSlider;