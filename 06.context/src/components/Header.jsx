import React, { useContext } from 'react'
import { ThemeContent } from '../context/ThemeContent'

const Header = () => {

  const {theme} = useContext(ThemeContent)
  const style = theme === 'Light'?{backgroundColor : 'white', color:'black'}:
                                  {backgroundColor : 'black', color:'white'}

  return (
    <div className='header' style={style}>
      <h1>Welcome OOO!</h1>
    </div>
  )
}

export default Header