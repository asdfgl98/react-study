import './App.css'

import Weather from './components/Weather'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SyncLoader from 'react-spinners/SyncLoader'

function Ex02() {
  // 위치이름
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)

  let API_KEY = process.env.REACT_APP_API_KEY

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
    const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    setLoading(true)
    const response = await axios.post(weather_url)
    console.log('현재 날씨 정보 : ', response)
    // const data = await response.json()
    setWeather(response.data)
    setLoading(false)
    // console.log(data)
  }

  useEffect(() => {
    // 현재 날씨 정보 요청
    getCurrentLocation()
  }, [])

  return (
    <div>
      {loading ? (
        <SyncLoader loading={loading}/>
      ) : (
        <Weather weather={weather} />
      )}
    </div>
  )
}

export default Ex02
