import React from 'react';

export default function Match({ match }) {
  return (
    <div className='card match'>
      <div className='flex-column match-header'>
        <h3 className='teamScore'>{match.homeTeam}</h3>
        <h2>{match.result}</h2>
        <h3 className='teamScore'>{match.awayTeam}</h3>
      </div>
      <h5>{match.Location}</h5>
    </div>
  );
}
