import React from 'react'
import Scoreboard from './Scoreboard'

function Header(props) {
  return (
    <header>
      <h1 className="title">Symbol Memory Game</h1>
      <Scoreboard bestScore={props.bestScore} score={props.score}/>
    </header>
  )
}

export default Header
