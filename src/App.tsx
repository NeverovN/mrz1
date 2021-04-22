import React, { ChangeEventHandler, useState, useRef } from 'react';
import './App.css';
import { addPairs, getInputValue } from './AddPairs'
import countConveyor from './CountConveyor'
import { ChangeEvent } from 'react';

interface IProps_Square {
  message: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function App() {
  const [pairCountInput, setPairCountInput]= useState<string>();
  const [renderPairForms, setRenderPairForms] = useState<React.ReactNode>();
  const [renderConveyorInput, setRenderConveyorInput]: any = useState();
  const [pairs, setPairs] = useState<object>();
  const pairCount = useRef<number>();

  function inputChangeHandler(e: React.FormEvent<HTMLInputElement>) {
    if (!Number.isNaN(Number.parseInt(e.currentTarget.value)) || e.currentTarget.value === "" ) {
      setPairCountInput(e.currentTarget.value);
    } else {
      alert("VALUE MUST BE INTEGER NUMBER");
    }
  }

  function pairElementChangeHandler(e: React.FormEvent<HTMLInputElement>) { //does not work
    const id = e.currentTarget.id;
    const num = id.substring(0, id.length - 1);
    const index = id.substring(id.length - 1, id.length);
    setPairs({
      ...pairs,
      num: {
        index: e.currentTarget.value,
      },
    });
    console.log(pairs);
  }

  function createPairsGrid(count: number) {
    let pairs = new Array<React.ReactNode>(count).fill(undefined);
    pairs = pairs.map((el, index) => el = [<input type="text" id={`${index}1`} onChange={ pairElementChangeHandler }/>, <input type="text" id={`${index}2`}/>])
    return pairs;
  }

  function pairCountSubmitHandler(e: React.MouseEvent<HTMLButtonElement>) {
    if (typeof pairCountInput !== "undefined" && pairCountInput !== "") {
      pairCount.current = Number.parseInt(pairCountInput);
    } else {
      alert("SET PAIR COUNT");
      return;
    }
    
    setRenderPairForms(createPairsGrid(pairCount.current));

  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Лаба 1
        </p>
        <div className="App-input">
          <text>введите количество пар</text>
          <br />
          <form>
            <input id="pairCountInput"
              type="text"
              size={10}
              value={pairCountInput}
              onChange={inputChangeHandler}
            />
            <br />
            <button
              type="button"
              className="Button"
              onClick={pairCountSubmitHandler}
            >
              TEXT
            </button>
          </form>
          <br />
        </div>
        <form
          className="Pairs-input"
        >
          {renderPairForms}
        </form>
        <div>
          {renderConveyorInput}
        </div>
      </header>
    </div>
  );
}

export default App;
