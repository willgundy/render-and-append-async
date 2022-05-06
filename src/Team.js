import React from 'react';

export default function Team({ team }) {
  return (
    <div className='card team'>
      <h2>{team.name}</h2>
      <h3>{team.nickName}</h3>
      <h5>{team.foundedYear}</h5>
    </div>
  );
}
