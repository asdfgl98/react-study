import React from 'react'
import GoodsList from '../page/GoodsList'
import Login from '../page/Login'
// 로그인 상태에 따라 다른 페이지로 이동되도록 구현하시오.
// 로그인 상태 : 상품상세페이지로 이동
// 비로그인 상태 : 로그인페이지로 이동
const PrivateRoute = ({goods, setGoods, authenticate, setAuthenticate}) => {
  return authenticate?<GoodsList goods={goods} setGoods={setGoods}/>:<Login setAuthenticate={setAuthenticate}/>
}

export default PrivateRoute