// import React from 'react'

// const Counter = ({count, setCount}) => {
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={()=>setCount(count+1)}>증가</button>
//     </div>
//   )
// }




import React,{useContext} from 'react'
import {CounterContext} from '../context/CounterContext'

const Counter = () => {

  const {count, setCount} = useContext(CounterContext)

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>증가</button>
    </div>
  )
}

export default Counter