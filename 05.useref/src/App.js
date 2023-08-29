import './App.css'
import {useState, useRef} from 'react'

/*
  1. ref란
  - 컴포넌트 내부에 저장공간 & 특정 DOM 요소에 접근하기 위해 사용

  2. ref특징
  - 값에 변화가 생기더라도 state처럼 리렌더링을 하지 않음
  - 화면이 리렌더링이 되더라도 ref 내 값은 그대로 유지
      -> 기존 var, let, const 변수는 초기화

  3. ref 활용
  - 리렌더링이 일어나더라도 컴포넌트 내부에 데이터를 유지해야 할 경우만 사용

*/



function App() {
  let countVar = 0
  const [countState, setCountState] = useState(0)
  let countRef = useRef(0)

  const handleClick = ()=>{
    countVar += 1
    console.log('var',countVar)
  }
  const handleClick2 = ()=>{
    setCountState(countState+1)
    console.log('state',countState)
  }
  const handleClick3 = ()=>{
    countRef.current += 1
    console.log('ref',countRef.current)
  }

  return (
    <div>
      <p>var : {countVar}</p>
      <p>state : {countState}</p>
      <p>ref : {countRef.current}</p>
      <button onClick={handleClick}>var +1</button>
      <button onClick={handleClick2}>state +1</button>
      <button onClick={handleClick3}>ref +1</button>
    </div>
  )
}

export default App
