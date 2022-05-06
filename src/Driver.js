import React from 'react';

export default function Driver({ driver }) {
  return (
    <div className='card driver'>
      <h2>{driver.driverNumber}</h2>
      <h3>{driver.driver}</h3>
      <div className='flex-column'>
        <div className='half-container'>
          <h5>{driver.constructor}</h5>
          <h5>{driver.country}</h5>
        </div>
        <img className='half-container' src={`${driver.helmetImage}`} />
      </div>

      
    </div>
  );
}
