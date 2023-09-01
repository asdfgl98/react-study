// import {useState} from 'react'
// import './App.css';
// import Counter from './components/Counter'

// function App() {

//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <Counter count={count} setCount={setCount}/>
//     </div>
//   );
// }

// export default App;

import { useState } from 'react'
import './App.css'
import Counter from './components/Counter.jsx'
import { CounterContext } from './context/CounterContext.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CounterContext.Provider value={{ count, setCount }}>
        <Counter />
      </CounterContext.Provider>
    </div>
  )
}

export default App
