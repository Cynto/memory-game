import { useState, useEffect } from 'react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import GameOver from './components/GameOver';

function App() {
  const [usedSymbolArray, setUsedArray] = useState([]);
  const [currentSymbolArray, setCurrentArray] = useState(['$', '+', '-', '=']);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(usedSymbolArray.length);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    console.log(usedSymbolArray);
    setScore(usedSymbolArray.length);
  }, [usedSymbolArray]);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score]);

  return (
    <div className="App">
      {!gameOver ? (
        [
          <div>
            <Header bestScore={bestScore} score={score} />
            <MainContainer
              currentSymbolArray={currentSymbolArray}
              setCurrentArray={setCurrentArray}
              usedSymbolArray={usedSymbolArray}
              setUsedArray={setUsedArray}
              setGameOver={setGameOver}
            />
          </div>,
        ]
      ) : (
        <GameOver
          bestScore={bestScore}
          setBestScore={setBestScore}
          score={score}
          setScore={setScore}
          setGameOver={setGameOver}
          setUsedArray={setUsedArray}
        />
      )}
    </div>
  );
}

export default App;
