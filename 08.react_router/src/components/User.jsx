import React from 'react'
import { useNavigate } from 'react-router-dom'

const User = ({setLoginState}) => {

    const navigate = useNavigate()

    const logout = ()=>{
        setLoginState(false)
        navigate('/')

    }

  return (
    <div>
        <h1>마이 페이지</h1>
        <hr/>
        <button onClick={logout}>로그아웃</button>
    </div>
  )
}

export default User