import React from 'react';

function Scoreboard(props) {
  return (
    <div className="scoreboard">
      <h4>Score: {props.usedSymbolArray.length}</h4>
      <span>|</span>
      <h4>Best Score: 0</h4>
    </div>
  );
}

export default Scoreboard;
