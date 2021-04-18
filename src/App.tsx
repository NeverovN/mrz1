import React, { useState } from 'react';
import './App.css';
import {addPairs, getInputValue} from './AddPairs'
import countConveyor from './CountConveyor'

function App() {                                         
  const [renderPairForms, setRenderPairForms] : any = useState();
  const [renderConveyorInput, setRenderConveyorInput] : any= useState();
  const [pairCount, setPairCount] : any = useState(0);
  
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
            setRenderConveyorInput(countConveyor(pairCount));
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
