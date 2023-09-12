import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const GoodsItem = ({data}) => {

  const navi = useNavigate()
  const itemId = useRef()

  // 상세 페이지
  // const detailClick = ()=>{
  //   let id = itemId.current.id
  //   navi(`/listDetail/${id}`)
  // }


  return (
    <div className="goods-item" style={{ position: "relative" }}>
      <div className="goods-item-icon">
        {/* 해당 상품이 new인지 best인지 조건부 렌더링을 통해 출력하시오. */}
        {data.new?<em className="goods-new">new</em>:<em className="goods-best">best</em>}
             
      </div>
      <div className="goods-thumb">
        {/* 
          이미지 클릭 시, Link컴포넌트를 이용해 상세페이지로 이동하시오
          상세페이지 URL : /menu/상품의 id        */}

        {/* <img id={data.id} onClick={detailClick} src={data.detail.sub_thumb} alt="이미지" ref={itemId} /> */}
        <Link to={`/listDetail/${data.id}`}><img id={data.id} src={data.detail.sub_thumb} alt="이미지" ref={itemId} /></Link>
      </div>
      <div className="goods-name">
        <h4>{data.name}</h4>
        <p>
          <span>{data.price}</span>원
        </p>
      </div>
    </div>
  );
};

export default GoodsItem;
