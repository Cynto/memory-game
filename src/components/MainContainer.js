import React from 'react';
import SymbolContainer from './SymbolContainer';

function MainContainer(props) {
  return (
    <div className="main-container">
      <div className="level-container">
        <h3>Choose your next symbol! Level {props.level}</h3>
      </div>
      <SymbolContainer
        currentSymbolArray={props.currentSymbolArray}
        setCurrentArray={props.setCurrentArray}
        usedSymbolArray={props.usedSymbolArray}
        setUsedArray={props.setUsedArray}
        setGameOver={props.setGameOver}
        setTotalSymbolArray={props.setTotalSymbolArray}
      />
    </div>
  );
}

export default MainContainer;
