import {createSlice} from '@reduxjs/toolkit'

export const movieSlice = createSlice({
    name : 'movieData',
    initialState :{
        data : '123'
    },
    reducers : {
        
    }
})

export const MovieReducerActions = movieSlice.actions

export default movieSlice.reducer