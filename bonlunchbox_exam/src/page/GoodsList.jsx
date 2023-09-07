import React, { useEffect } from "react";
import GoodsItem from "../components/GoodsItem";
import axios from "axios";

const GoodsList = ({ goods, setGoods }) => {

  //1.axios를 이용하여 상품정보를 가진 URL로 요청한 후, 응답받은 데이터를
  //상품리스트 state에 저장하는 getGoodsList함수를 구현하시오.
  //URL: http://localhost:3004/goods_list
  const getGoosList = async()=>{
    let response = await axios.get('http://localhost:3004/goods_list')
    setGoods(response.data)
  }
  
  
  //2.useEffect() 를 이용하여 getGoodsList함수를 한 번만 호출하시오.
  useEffect(()=>{
    getGoosList()
  },[])

  console.log(goods)

  return (
    <div className="goods-list">
      {/* 3.상품리스트 안에 있는 정보를 GoodsItem 컴포넌트를 활용해 출력하시오. */}
      {goods?.map((item)=>(
        <GoodsItem key={item.id} data={item}/>
      ))}

    </div>
  );
};

export default GoodsList;
