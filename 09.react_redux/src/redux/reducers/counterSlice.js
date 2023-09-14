import { createSlice } from "@reduxjs/toolkit";

// createSlice() : state, reducer를 정의하는 함수
// - state 초기화
// - state를 변경하는 함수 정의 -> reducer

// name : reducer의 이름을 정의하는 속성
// initialState : 
export const counterSlice = createSlice({
    name : 'counter',
    initialState : {
        count : 0
    },
    reducers : {
        // reducer함수 정의 시, 매개변수에 반드시 state 정의
        // 정의한 state는 intialState에 접근 할 수있음 count에 접근한다면 state.count 로 접근
        // 원래는 action도 정의해야 하지만 redux-toolkit을 사용하면 생략해도 된다.
        increment:(state)=>{
            state.count+=1
        },
        decrease:(state)=>{
            state.count-=1
        },
        increment2:(state)=>{
            state.count+=2
        },

        // 넘겨 받은 숫자를 이용해서 state를 변경하는 함수 정의하기
        // action - > {type, payload} 형태로 반환
        // type : 명령 타입 ex) 숫자를 증가해라(increment)
        // payload : 외부로부터 넘겨받은 데이터를 저장하는 속성
        incrementByAmount : (state, action)=>{
            console.log(action)
            // action -> {type:'counter/incrementByAmount', payload:''}
            state.count = action.payload
        }
        
    }
})

// 컴포넌트에서 reducer 함수를 실행할 수 있게 내보내기
// export const {increment, decrease, increment2, incrementByAmount} = counterSlice.actions
export const CountRedcerActions = counterSlice.actions

// store.js에서 접근할 수 있도록 내보내기
export default counterSlice.reducer