import React from 'react';

function Scoreboard(props) {
  return (
    <div className="scoreboard">
      <h4>Score: {props.score}</h4>
      <span>|</span>
      <h4>Best Score: {props.bestScore}</h4>
    </div>
  );
}

export default Scoreboard;
