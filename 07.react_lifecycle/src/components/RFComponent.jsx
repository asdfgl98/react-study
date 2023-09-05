import React, { useEffect, useState } from 'react'

/*
    1. Life Cycle(생명주기)
     - React 컴포넌트의 생성부터 소멸까지 이르는 일련의 과정
     - Mount, Update, UnMount
     - Mount : 컴포넌트가 화면에 처음 그려진 상태 ex) api 활용 할 때
     - Update : props, state, force Update 변화가 발생 했을 때 리렌더링 되는 상태
                + 부모 컴포넌트가 갱신되었을때도 동작
            ex) 특정 state가 변경되었을 때 활용
     - UnMount : 컴포넌트가 화면에서 사라진 상태

     - 함수형 컴포넌트에서는 useEffect() 를 사용 (클래스형 컴포넌트에서는 사용불가)
*/


const RFComponent = () => {
  const [num, setNum] = useState(0)
  
  const click = () => {
    setNum(num + 1)
  }


  // 3. componentDidMount 대체
  // useEffect(()=>{ 실행할 로직 },[]) : 화면이 처음 렌더링 될 때 실행

  useEffect(() => {
    console.log('componentDidMount 대체 = > 화면 렌더링 완료')
  }, [])

  
  useEffect(() => {
    console.log('num state 변화 감지')
  }, [num])


  return (
    <div>
      <p>
        RFComponent : {num}
        <br />
        <button onClick={click}>증가</button>
      </p>

    </div>
  )
}

export default RFComponent
