import React, { useEffect, useState } from 'react'

/*
    [실습문제] 참참참 게임 만들기

    [Rule] 
    1. 사용자는 공격, 컴퓨터는 수비 역할
    2. 버튼을 클릭했을 때 사용자와 컴퓨터의 선택이 같다면 사용자(공격)의 승리 
    3. 사용자와 컴퓨터의 선택이 다르다면 컴퓨터(수비)의 승리 

    [활용해야 할 기술]
    1.사용자의 선택, 컴퓨터의 선택, 게임결과 => state 관리
    2.사용자가 누른 버튼의 내용을 비교할 값으로 사용 => Event 객체
    3.컴퓨터는 랜덤으로 ‘좌’, ‘정면’, ‘우’를 출력 => 배열과 Math.random()활용
    4.컴퓨터의 값이 변화가 생겼을 때 사용자의 선택과 비교하여 승패 판별 => useEffect()
    5.게임 시작 전 “게임결과 : ~ “ 나오지 않도록 구현 => 조건부 렌더링
*/


const Ex03 = () => {
    let btns = ['좌','정면','우']

    const [userChoice, setUserChoice] = useState(null)
    const [comChoice, setComChoice] = useState(null)
    const [winner, setWinner] = useState(null)

    const btnClick = (e)=>{

        let ranCom = parseInt(Math.random()*3)
        
        setComChoice(btns[ranCom])
        setUserChoice(e.target.innerText)
    }

    useEffect(()=>{
        if(userChoice !== null){
            if(userChoice === comChoice){
                setWinner('나의 승리')
            }
            else{
                setWinner('컴퓨터의 승리')
            }
        }
    },[userChoice,comChoice])

    return (
      <div>
          <h1>참참참 게임</h1>
          <h3>나의 선택 : {userChoice}</h3>
          <h3>컴퓨터의 선택 : {comChoice}</h3>
  
          {/* 게임 결과 출력 */}
          <h3>{winner}</h3>
          {/* 좌, 정면, 우 버튼 생성 */}
          {btns.map((item, index)=>(
            <button key={index} onClick={btnClick}>{item}</button>)
          )}
      </div>
    )
}

export default Ex03