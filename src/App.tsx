import React, { useState } from 'react';
import './App.css';
import {addPairs, getInputValue} from './AddPairs'

function App() {
  let item: any;                                      //я не знаю, как это пофиксить,  
  const [renderItem, setRenderItem] = useState(item); //но выглядит как костыль
  const [pairCount, setPairCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Лаба 1
        </p>
        <div className="App-input">
          введите количество пар
          <form onSubmit={(event) => {
            event.preventDefault();
            const count = getInputValue();
            if (typeof addPairs() !== "undefined" && typeof count !== "undefined") {
              setPairCount(Number.parseInt(count));
              setRenderItem(addPairs());
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
            
          }}
        >
          {renderItem}
          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
