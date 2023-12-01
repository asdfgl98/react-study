import './ex03.css'
import Left1 from "./compo/Left1";
import Right1 from "./compo/Right1";
import {createContext} from 'react'
import { useState } from 'react';

export const CountContext = createContext(null)

function Ex03() {
    
    const [number, setNumber] = useState(0)

  return (
    
    <div id="container">
      <h1>Root </h1>
      <div id="grid">
        <CountContext.Provider value={{number,setNumber}}>
          <Left1></Left1>
          <Right1></Right1>
        </CountContext.Provider>
      </div>
    </div>
  );
}

export default Ex03;