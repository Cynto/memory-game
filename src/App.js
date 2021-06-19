import { useState, useEffect } from 'react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';

function App() {
  const [usedSymbolArray, setUsedArray] = useState([])
  const [currentSymbolArray, setCurrentArray] = useState(['$', '+', '-', '='])

  useEffect(() => {
    console.log(usedSymbolArray)
  }, [usedSymbolArray])
  return (
    <div className="App">
      <Header usedSymbolArray={usedSymbolArray}/>
      <MainContainer currentSymbolArray={currentSymbolArray} setCurrentArray={setCurrentArray} usedSymbolArray={usedSymbolArray} setUsedArray={setUsedArray}/>
    </div>
  );
}

export default App;
