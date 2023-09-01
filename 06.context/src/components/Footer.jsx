import React, { useContext } from 'react'
import { ThemeContent } from '../context/ThemeContent'

const Footer = () => {

  

  const {theme, setTheme} = useContext(ThemeContent)
  let mode = theme === 'Light'? 'Dark Mode': 'Light Mode'

  const style = theme === 'Light'?{backgroundColor : 'white', color:'black'}:
                                  {backgroundColor : 'black', color:'white'}

  const modeClick = (e)=>{
    if(e.target.innerText === 'Dark Mode'){
      setTheme('Dark')
    }
    else{
      setTheme('Light')
    }
  }

  return (
    <div className='footer' style={style}>
      <button className='button' onClick={modeClick}>{mode}</button>
    </div>
  )
}

export default Footer