import React from 'react'
import {useRef} from 'react'

const Ex02 = () => {

    const id = useRef()
    const pw = useRef()

  const login = () => {
    if(id.current.value === '123' && pw.current.value === '123'){
        alert('로그인성공')
    }
    else{
        alert('로그인실패')
    }
  }

  return (
    <div>
      ID : <input type="text" ref={id}></input>
      PW : <input type="password" ref={pw}></input>
      <button onClick={login}>로그인</button>
    </div>
  )
}

export default Ex02
