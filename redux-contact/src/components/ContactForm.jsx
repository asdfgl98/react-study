import React from 'react'
import {ContactReducerActions} from '../redux/reducers/contactSlice'
import {useDispatch} from 'react-redux'
import { useRef } from 'react'

const ContactForm = () => {

    const dispatch = useDispatch()
    const name = useRef()
    const phone = useRef()

    const click = ()=>{
        let nameVal = name.current.value
        let phoneVal = phone.current.value
        dispatch(ContactReducerActions.addContact({id:new Date().getTime() + Math.random(), name:nameVal, phone:phoneVal}))
    }

  return (
    <div>
        <input placeholder='이름을 입력해주세요' ref={name}></input><br/>
        <input placeholder='전화번호를 입력해주세요' ref={phone}></input><br/>
        <button onClick={click}>등록</button>
    </div>
  )
}

export default ContactForm