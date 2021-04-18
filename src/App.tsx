import React, { useState } from 'react';
import './App.css';
import {addPairs, getInputValue} from './AddPairs'
import countConveyor from './CountConveyor'

function App() {
  let item: any;                                                //я не знаю, как это пофиксить,  
  const [renderPairForms, setRenderPairForms] = useState(item); //но выглядит как костыль
  const [renderConveyorInput, setrenderConveyorInput] = useState(item);
  const [pairCount, setPairCount] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Лаба 1
        </p>
        <div className="App-input">
          <text>введите количество пар</text>
          <br/>
          <form onSubmit={(event) => {
            event.preventDefault();
            const count = getInputValue();
            if (typeof addPairs() !== "undefined" && typeof count !== "undefined") {
              setPairCount(Number.parseInt(count));
              setRenderPairForms(addPairs());
            }
          }}>
            <input id="pairCountInput"
              type="text"
              size={10}
            />
            <br />
            <input type="submit" className="Button" />
          </form>
          <br />
        </div>
        <form
          className="Pairs-input"
          onSubmit={(event) => { 
            event.preventDefault();
            setrenderConveyorInput(countConveyor(pairCount));
          }}
        >
          {renderPairForms}
        </form>
        {renderConveyorInput}
      </header>
    </div>
  );
}

export default App;
