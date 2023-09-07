import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setLoginState}) => {

    const navigate = useNavigate()

    const login = ()=>{
        setLoginState(true)
        navigate('/')
    }

  return (
    <div>
        <h1>로그인 페이지</h1>
        <hr/>
        <button onClick={login}>로그인</button>
    </div>
  )
}

export default Login