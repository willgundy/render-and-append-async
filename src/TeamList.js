import React from 'react';
import Team from './Team';


export default function TeamList(props) {
  return (
    <dive>
      { props.teams.map((team, i) => 
        <Team 
          key={i}
          team={team}
        />
      )}
    </dive>
    
  );
}
