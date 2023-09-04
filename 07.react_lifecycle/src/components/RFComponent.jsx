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

// 40c20d5764b1e6eced5848b455f162de

const RFComponent = () => {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)

  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  console.log('1. constructor 대체 => 함수 초기화')
  const click = () => {
    setNum(num + 1)
  }

  const click2 = () => {
    setNum2(num2 + 1)
  }

  // 3. componentDidMount 대체
  // useEffect(()=>{ 실행할 로직 },[]) : 화면이 처음 렌더링 될 때 실행
  useEffect(() => {
    console.log('3. componentDidMount 대체 = > 화면 렌더링 완료')


    async function logJSONData() {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.146626&lon=126.922233&units=metric&appid=40c20d5764b1e6eced5848b455f162de");
        const jsonData = await response.json();
        console.log(jsonData);
        setTemp(jsonData.main.temp);
        setWeather(jsonData.name);
      }
      logJSONData()

  }, [])

  // componentDidUpdate 대체
  // useEffect(()=>{ 실행할 로직 }, [변화를 감지할 state]) 배열이기 때문에 state를 여러개 작성 가능
  // - 특정 state가 변화할 때 실행
//   useEffect(() => {
//     console.log('componentDidUpdate 대체 => []안에 state 설정')
//   }, [num])

//   useEffect(() => {
//     console.log('componentDidUpdate 대체 => []안에 state 설정')
//   }, [num2])
  
  useEffect(() => {
    console.log('num or num2 state 변화 감지')
  }, [num,num2])

  return (
    <div>
      {console.log('2. render')}
      <p>
        RFComponent : {num}
        <br />
        <button onClick={click}>증가</button>
      </p>
      <p>
        RFComponent2 : {num2}
        <br />
        <button onClick={click2}>증가</button>
      </p>

      <h1>{weather === 'Gwangju'?'광주':weather}의 기온은 {temp}도 입니다.</h1>
    </div>
  )
}

export default RFComponent
