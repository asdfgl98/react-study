import React, { useContext } from 'react'
import { ThemeContent } from '../context/ThemeContent'

const Content = () => {

  const {theme} = useContext(ThemeContent)

  const style = theme === 'Light'?{backgroundColor : 'white', color:'black'}:
                                  {backgroundColor : 'black', color:'white'}

  return (
    <div className='content' style={style}>
      OOO님, 좋은 하루 되세요
    </div>
  )
}

export default Content