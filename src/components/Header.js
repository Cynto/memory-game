import React from 'react'
import Scoreboard from './Scoreboard'

function Header(props) {
  return (
    <header>
      <h1>Symbol Memory Game</h1>
      <Scoreboard usedSymbolArray={props.usedSymbolArray}/>
    </header>
  )
}

export default Header
