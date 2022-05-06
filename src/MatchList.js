import React from 'react';
import Match from './Match';

export default function MatchList(props) {
  return (
    <div>
      { props.matches.map((match, i) => 
        <Match 
          key={i}
          match={match}
        />
      )}
    </div>
    
  );
}
