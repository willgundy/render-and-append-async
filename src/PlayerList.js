import React from 'react';
import Player from './Player';

export default function PlayerList(props) {
  return (
    <div>
      { props.players.map((player, i) => 
        <Player 
          key={i}
          player={player}
        />
      )}
    </div>
    
  );
}
