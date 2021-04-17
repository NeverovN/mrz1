import React, { useState } from 'react';
import './App.css';
import addPairs from './AddPairs'

function App() {
  let item: any;                                      //я не знаю, как это пофиксить,  
  const [renderItem, setRenderItem] = useState(item); //но выглядит как костыль
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
            if (typeof addPairs() !== "undefined") {
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
          {renderItem}
        </div>
      </header>
    </div>
  );
}

export default App;
