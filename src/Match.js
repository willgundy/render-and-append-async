import React from 'react';

export default function Match({ match }) {
  return (
    <div>
      <h2>{match.result}</h2>
      <h3>{match.homeTeam}</h3>
      <h3>{match.awayTeam}</h3>
      <h5>{match.Location}</h5>
    </div>
  );
}
