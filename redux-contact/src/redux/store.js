import {configureStore} from '@reduxjs/toolkit'
import contactSlice from './reducers/contactSlice'

export default configureStore({
    reducer :{
        contact : contactSlice
    },
})