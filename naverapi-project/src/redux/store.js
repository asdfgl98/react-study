import {configureStore} from '@reduxjs/toolkit'
import naverSlice from './reducers/naverSlice'

export default configureStore({
    reducer :{
        data : naverSlice
    }
})