import React from 'react';

export default function Player({ player }) {
  return (
    <div className='card player'>
      <h2>{player.player}</h2>
      <h3>{player.position}</h3>
      <h5>{player.nation}</h5>
      <h5>{player.squad}</h5>
    </div>
  );
}
