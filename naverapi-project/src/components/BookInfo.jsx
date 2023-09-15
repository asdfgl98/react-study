import React from 'react'
import BookDetail from './BookDetail'
import {useSelector} from 'react-redux'
const BookInfo = () => {

    const bookData = useSelector(state=>state.data.data)

  return (
    <div className='book-list'>
        {bookData?.map((item)=><BookDetail key={item.isbn}data={item}/>)}
    </div>
  )
}

export default BookInfo