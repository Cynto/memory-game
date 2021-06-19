import React from 'react'
import SymbolContainer from './SymbolContainer'

function MainContainer(props) {
  return (
    <div className="main-container">
      <SymbolContainer currentSymbolArray={props.currentSymbolArray} setCurrentArray={props.setCurrentArray} usedSymbolArray={props.usedSymbolArray} setUsedArray={props.setUsedArray}/>
    </div>
  )
}

export default MainContainer
