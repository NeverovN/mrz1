import React, {useState} from 'react';
import './App.css';
import './OnPairsClick'
import onPairClick from './OnPairsClick';
import {createPairs} from './CreatePairs';
import renderPairsInput from './RenderPairsInput';

function App() {
  const a: any = [];
  const [pairInputFields, setPairInputFields] = useState(a);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Лаба 1
        </p>
        <div className="App-input">
          введите количество пар
          <input id="pairCountInput"
            type="text"
            size={10}
          />
        </div>
        <div className="App-button">
          <button className="Button" onClick={ () => {
            const count = onPairClick();
            const pairs = createPairs(count);
            console.log(createPairs(count));
            if (typeof pairs !== "undefined"){
              setPairInputFields(pairs);
            }
            }}>submit</button>
        </div>
        {renderPairsInput(pairInputFields)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
