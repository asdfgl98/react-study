import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductDetail2 = () => {

    const [query, setQuery] = useSearchParams()

    // 쿼리스트링으로 넘겨받은 데이터를 가져오는 함수 : query.get(name)
    //ex) http://localhost:3000/product?cate=shirt
    //      query.get('cate) ==> shirt
    console.log(query.get('cate'))

  return (
    <div>ProductDetail2</div>
  )
}

export default ProductDetail2