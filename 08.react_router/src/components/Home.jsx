import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = ({loginState}) => {
    
    const navigate = useNavigate()

    const click = ()=>{
        navigate('/product')
    }

  return (
    <div>
        <h1>Home</h1>
        <hr/>
        <Link to={"/about"}>About 페이지로 이동</Link>
        <br/>
        <button onClick={click}>상품페이지로 이동하기</button>
        <br/>
        {loginState? <Link to={'/user'}>마이 페이지</Link>:<Link to={'/login'}>로그인 페이지로 이동</Link>}
    </div>
  )
}

export default Home