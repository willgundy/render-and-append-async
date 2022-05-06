import React from 'react';
import Team from './Team';


export default function TeamList(props) {
  return (
    <div>
      { props.teams.map((team, i) => 
        <Team 
          key={i}
          team={team}
        />
      )}
    </div>
    
  );
}
