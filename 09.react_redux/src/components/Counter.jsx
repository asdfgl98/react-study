import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { increment, decrease, increment2, incrementByAmount } from '../redux/reducers/counterSlice'
import {CountRedcerActions} from '../redux/reducers/counterSlice'
import { useRef } from 'react'


/*
    1. useSelector() : store에 등록된 state를 접근하기 위한 함수
        사용법 : useSelector((state)=>state.등록된 reducer 속성명.state명)
        등록 된 reducer 속성명 => configureStore의 reducer에 정의된 객체속성

    2. useDispatch() : state변경에 대한 요청을 보내는 함수
        사용법)
            const dispatch = useDispatch()
            dispatch(action) -> action에 대해 실행요청 
            

    3. action : state를 변경하기 위한 명령
        ex) counterSlice의 reducers 속성에 정의된 increment, decrement
*/

const Counter = () => {



    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
    const action = useRef()


  return (
    <div>
        <h1>Redux Toolkit 활용 실습</h1>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(CountRedcerActions.increment())}>증가</button>
        <button onClick={()=>dispatch(CountRedcerActions.decrease())}>감소</button>
        <button onClick={()=>dispatch(CountRedcerActions.increment2())}>2씩 증가</button>
        <input type="text" ref={action} />
        <button onClick={()=>dispatch(CountRedcerActions.incrementByAmount(action.current.value))}>aciton</button>
    </div>
  )
}

export default Counter