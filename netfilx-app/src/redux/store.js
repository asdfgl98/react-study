import {configureStore} from '@reduxjs/toolkit'
import movieSlice from './reducers/movieSlice'

export default configureStore({
    reducer : {
        movie : movieSlice
    }
})