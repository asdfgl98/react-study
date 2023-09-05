import './App.css';

import Weather from './components/Weather';
import React, { useState, useEffect } from 'react'

function App() {

    /*
        실습) 날씨앱 만들기
        1. 현재 위치 (위도, 경도)를 navigator.geolocation 객체로부터 가져온다.
        2. 위도, 경도 정보를 Weather API 로 현재 날씨 정보를 요청한다.
            - fetch API, useEffect() 활용
            - fetch API : 서버의 데이터를 비동기 방식으로 요청하는 Web API

            fetch API 원래 구조)
              fetch(url)
                .then((response)=>{
                    데이터를 성공적으로 받아오면 실행할 로직
                })
                .catch((error)=>{
                    오류가 발생했을 때 로직
                })
                .finally(()=>{
                    무조건 실행 할 로직
                })

              간략화 하여 async await를 사용


        3. 받아온 정보 중에서 지역, 온도, 날씨이미지를 화면에 출력한다.
            - 날씨정보는 state로 관리
            - 날짜 정보 출력
        */

  // 위치이름
  const [weather, setWeather] = useState(null)


  /* 현재 위치 (위도, 경도)를 가져오는 함수 */
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {

      let lat = position.coords.latitude
      let lon = position.coords.longitude

      getCurrentWeather(lat, lon)
    })
  }
  


  // 위도 경도를 입력받아서 날씨 정보 가져오는 비동기 함수
  async function getCurrentWeather(lat, lon) {
    const api = '40c20d5764b1e6eced5848b455f162de'
    const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api}`

    const response = await fetch(weather_url)
    const data = await response.json()
    setWeather(data)
    // console.log(data)

  }

  useEffect(() => {
    // 현재 날씨 정보 요청
    getCurrentLocation()

  }, [])

  return (
    <div>
      <Weather weather={weather}/>
    </div>
  );
}

export default App;
