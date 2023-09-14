import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {ContactReducerActions} from '../redux/reducers/contactSlice'
import ContactItem from './ContactItem'
import { useEffect } from 'react'

const ContactList = () => {
    const contact = useSelector((state)=>state.contact.contacts)
    const [filter, setFilter] = useState(contact)
    const keyword = useSelector((state)=>state.contact.keyword)

    useEffect(()=>{
        let newContack = contact.filter((item)=>item.name.includes(keyword))
        setFilter(newContack)
    },[keyword])

    useEffect(()=>{
        setFilter(contact)
    },[contact])

  return (
    <div>
        <p>총 연락처 : {filter.length} </p>
        {filter.map((item)=>(
            <ContactItem key={item.id} contact ={item}/>
        ))}        
    </div>
  )
}

export default ContactList