import { useState, useEffect } from 'react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import GameOver from './components/GameOver';
import Footer from './components/Footer';

function App() {
  const [totalSymbolArray, setTotalSymbolArray] = useState([]);
  const [usedSymbolArray, setUsedArray] = useState([]);
  const [currentSymbolArray, setCurrentArray] = useState(['$', '+', '-', '=']);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(usedSymbolArray.length);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(1);

  const symbolArray = [
    '$',
    '+',
    '-',
    '=',
    '!',
    '@',
    '#',
    '^',
    '%',
    '&',
    '*',
    '(',
    ')',
    '_',
    '}',
    '{',
    '|',
    '/',
  ];

  useEffect(() => {
    if (usedSymbolArray.length === currentSymbolArray.length) {
      setLevel(level + 1);
      setCurrentArray([]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usedSymbolArray]);

  useEffect(() => {
    const getRandomElement = () => {
      const randomElement =
        symbolArray[Math.floor(Math.random() * symbolArray.length)];
      if (currentSymbolArray.indexOf(randomElement) === -1) {
        setCurrentArray((oldArray) => [...oldArray, randomElement]);
      } else getRandomElement();
      setUsedArray([]);
    };

    if (currentSymbolArray.length !== level + 3) {
      getRandomElement();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSymbolArray]);

  useEffect(() => {
    setScore(totalSymbolArray.length);
  }, [totalSymbolArray]);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  return (
    <div className="App">
      {!gameOver ? (
        [
          <div className="total-container" key={'unique'}>
            <Header bestScore={bestScore} score={score} />
            <MainContainer
              currentSymbolArray={currentSymbolArray}
              setCurrentArray={setCurrentArray}
              usedSymbolArray={usedSymbolArray}
              setUsedArray={setUsedArray}
              setGameOver={setGameOver}
              setTotalSymbolArray={setTotalSymbolArray}
              level={level}
            />
            <Footer />
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
          setCurrentArray={setCurrentArray}
          setTotalSymbolArray={setTotalSymbolArray}
          setLevel={setLevel}
        />
      )}
    </div>
  );
}

export default App;
