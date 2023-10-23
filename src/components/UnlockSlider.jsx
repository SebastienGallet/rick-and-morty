import React from 'react';
import Draggable from 'react-draggable';
import './UnlockSlider.css';

const UnlockSlider = ({ onUnlock }) => {
  const handleStop = (event, data) => {
    if (data.x >= 250) {
      onUnlock();
    }
  };

  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const currentDate = new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="iphone-container">
    <div className='notch'></div>
      <div className='localTime'>
        <div className="time">{currentTime}</div>
        <div className="date">{currentDate}</div>
      </div>
      <div className="slider-container">
        <div className="slider-track">
          <Draggable axis="x" bounds="parent" onStop={handleStop}>
            <div className="slider-thumb" />
          </Draggable>
        </div>
      </div>
    </div>
  );
};

export default UnlockSlider;