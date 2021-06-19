import React from 'react';

function GameOver(props) {
  const { setGameOver, score, setUsedArray } = props;
  return (
    <div className="game-over-screen">
      <div>
        <h1>Game Over!</h1>
        <h3>Score: {score}</h3>
        <button
          onClick={() => {
            setGameOver(false);
            setUsedArray([]);
          }}
        >
          New Game
        </button>
      </div>
    </div>
  );
}

export default GameOver;
