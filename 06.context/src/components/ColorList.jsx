import React, { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'

const ColorList = () => {

    const {setColor} = useContext(ColorContext)

    const colorClick = (e)=>{
        setColor(e.target.className)
    }


  return (
    <div>
        <h1>색상 선택하기</h1>
        <div className='colorList'>
            <div className='box color-red' onClick={colorClick}></div>
            <div className='box color-orange' onClick={colorClick}></div>
            <div className='box color-yellow' onClick={colorClick}></div>
            <div className='box color-green' onClick={colorClick}></div>
            <div className='box color-blue' onClick={colorClick}></div>
        </div>
    </div>
  )
}

export default ColorList