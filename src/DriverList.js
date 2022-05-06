import React from 'react';
import Driver from './Driver';

export default function DriverList(props) {
  return (
    <dive>
      { props.drivers.map((driver, i) => 
        <Driver 
          key={i}
          driver={driver}
        />
      )}
    </dive>
    
  );
}
