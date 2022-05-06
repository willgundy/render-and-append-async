import React from 'react';

export default function Driver({ driver }) {
  return (
    <div>
      <h2>{driver.number}</h2>
      <h3>{driver.driver}</h3>
      <h5>{driver.constructor}</h5>
      <h5>{driver.country}</h5>
    </div>
  );
}
