import React from 'react';
import uniqid from 'uniqid';

function SymbolContainer(props) {
  const {
    currentSymbolArray,
    setCurrentArray,
    usedSymbolArray,
    setUsedArray,
    setGameOver,
    setTotalSymbolArray,
  } = props;

  const shuffle = () => {
    setCurrentArray((oldArray) => {
      let currentIndex = oldArray.length,
        randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [oldArray[currentIndex], oldArray[randomIndex]] = [
          oldArray[randomIndex],
          oldArray[currentIndex],
        ];
      }
      return oldArray;
    });
  };

  return (
    <div className="symbol-container">
      {currentSymbolArray.map((item) => {
        return (
          <div
            key={uniqid()}
            className="symbol-item"
            onClick={() => {
              shuffle();
              if (usedSymbolArray.indexOf(item) === -1) {
                setUsedArray((oldArray) => [...oldArray, item]);
                setTotalSymbolArray((oldArray) => [...oldArray, item]);
              } else {
                setGameOver(true);
              }
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default SymbolContainer;
