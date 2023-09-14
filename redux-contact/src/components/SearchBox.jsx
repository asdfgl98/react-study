import React from 'react'
import {useDispatch} from 'react-redux'
import { useRef } from 'react'
import {ContactReducerActions} from '../redux/reducers/contactSlice'
const SearchBox = () => {

    
    const dispatch = useDispatch()
    const search = useRef()
    const find = ()=>{
        dispatch(ContactReducerActions.searchContact(search.current.value))
    }
  return (
    <div>
        <input type="text" placeholder='검색할 키워드를 입력하세요.' ref={search}/>
        <button onClick={find}>찾기</button><br/>
    </div>
  )
}

export default SearchBox