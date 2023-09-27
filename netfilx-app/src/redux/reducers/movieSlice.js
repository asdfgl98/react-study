import {createSlice} from '@reduxjs/toolkit'

export const movieSlice = createSlice({
    name : 'movieData',
    initialState :{
        popularMovies : '',
        topRatedMovies : '',
        upcomingMovies : '',
        genre : ''
    },
    reducers : {
        initData:(state, actions)=>{
            state.popularMovies = actions.payload.popular.results
            state.topRatedMovies = actions.payload.topRated.results
            state.upcomingMovies = actions.payload.upComing.results
        },

        genreData:(state, actions)=>{
            state.genre = actions.payload
        }
    }
})

export const MovieReducerActions = movieSlice.actions

export default movieSlice.reducer