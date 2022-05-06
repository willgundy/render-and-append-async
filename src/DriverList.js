import React from 'react';
import Driver from './Driver';

export default function DriverList(props) {
  return (
    <div>
      { props.drivers.map((driver, i) => 
        <Driver 
          key={i}
          driver={driver}
        />
      )}
    </div>
    
  );
}
