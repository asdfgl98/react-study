import React from 'react'

const ContactItem = ({contact}) => {
    console.log('111',contact)
  return (
    <div className='phone'>
        <p>{contact.name}</p>
        <p>{contact.phone}</p>
    </div>
  )
}

export default ContactItem