import React, { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'

const ColorResult = () => {

  const {color} = useContext(ColorContext)

  return (
    <div className='colorList'>
      <h1>선택한 색상 : </h1>
      <div className={color}></div>
    </div>
  )
}

export default ColorResult