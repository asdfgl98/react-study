import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        todos:[]

    },
    reducers : {  
       addTodo:(state,action)=>{
        console.log(action)
        state.todos = state.todos.concat(action.payload)
       },
       setTodo:(state,action)=>{
        state.todos = action.payload
       }        
    }
})

// 컴포넌트에서 reducer 함수를 실행할 수 있게 내보내기
export const TodoRedcerActions = todoSlice.actions

// store.js에서 접근할 수 있도록 내보내기
export default todoSlice.reducer