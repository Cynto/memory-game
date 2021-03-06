import React from 'react';

function GameOver(props) {
  const { setGameOver, setScore, score, setUsedArray, setCurrentArray, setTotalSymbolArray, setLevel } = props;
  return (
    <div className="game-over-screen">
      <div>
        <h1>Game Over!</h1>
        <h3>Score: {score}</h3>
        <button
          onClick={() => {
            setGameOver(false);
            setLevel(1)
            setScore(0)
            setUsedArray([]);
            setCurrentArray(['$', '+', '-', '='])
            setTotalSymbolArray([])
          }}
        >
          New Game
        </button>
      </div>
    </div>
  );
}

export default GameOver;
