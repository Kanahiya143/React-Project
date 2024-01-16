import { useState } from 'react'

import './App.css'

function App() {

  let [numberCount, setnumberCount] = useState(0) // useState is a hook used for variable update on UI
  // useState import from react it contain an arr which have two argument first var and second func
  // useState set value of declare var by taking an argument
  const addOne = ()=>{
    numberCount = numberCount + 1;
    setnumberCount(numberCount) // func is take an argument which var is update on UI
  }
  const removeOne = ()=>{
    numberCount = numberCount - 1;
    setnumberCount(numberCount)
  }

  
  return (
    <>
      <h1>Count = {numberCount}</h1>
      <button onClick={addOne}>{numberCount} &nbsp; +1</button>
      <br />
      <br />
      <button onClick={removeOne}>{numberCount} &nbsp; -1</button>
    </>
  )
}

export default App
