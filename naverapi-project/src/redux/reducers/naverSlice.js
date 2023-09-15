import {createSlice} from '@reduxjs/toolkit'

export const naverSlice = createSlice({
    name : 'naver',
    initialState : {
        data : null
    },
    reducers : {
        dataInput :(state, action)=>{
            state.data = action.payload
        }
    }
})

export const NaverReducerActions = naverSlice.actions

export default naverSlice.reducer