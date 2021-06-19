import React from 'react';
import SymbolContainer from './SymbolContainer';

function MainContainer(props) {
  return (
    <div className="main-container">
      <SymbolContainer
        currentSymbolArray={props.currentSymbolArray}
        setCurrentArray={props.setCurrentArray}
        usedSymbolArray={props.usedSymbolArray}
        setUsedArray={props.setUsedArray}
        setGameOver={props.setGameOver}
      />
    </div>
  );
}

export default MainContainer;
