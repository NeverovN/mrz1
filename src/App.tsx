import React, { useState } from 'react';
import './App.css';
import addPairs from './AddPairs'
import './OnPairsClick';

function App() {
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
            addPairs();
          }}>
            <input id="pairCountInput"
              type="text"
              size={10}
            />
            <br />
            <input type="submit" className="Button" />
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
