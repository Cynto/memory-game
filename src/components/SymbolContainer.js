import React from 'react'

function SymbolContainer(props) {

  const { currentSymbolArray, setCurrentArray, usedSymbolArray, setUsedArray} = props


  const shuffle = () => {
    setCurrentArray((oldArray) => {
      let currentIndex = oldArray.length, randomIndex;

      while(0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [oldArray[currentIndex], oldArray[randomIndex]] = [
          oldArray[randomIndex], oldArray[currentIndex]]
      }
      return oldArray
    })
  }


  return (
    <div className="symbol-container">
      {currentSymbolArray.map((item) => {
        return(
        <div key={item} className="symbol-item"
        onClick={() => {
          shuffle()
          console.log(usedSymbolArray.indexOf(item))
          if(usedSymbolArray.indexOf(item) === -1) {
          setUsedArray((oldArray) => [...oldArray, item])} }}>
          {item}
        </div>)
      })}
    </div>
  )
}

export default SymbolContainer
