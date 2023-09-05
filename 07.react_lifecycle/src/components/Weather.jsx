import React from 'react'
import '../App.css'

const Weather = ({weather}) => {
    let today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth()+1
    let date = today.getDate()
    let day = today.getDay()
    let dday
    if(day === 0){
        dday = '일'
    }
    else if(day === 1){
        dday = '월'
    }
    else if(day ===2){
        dday ='화'
    }
    else if(day ===3){
        dday ='수'
    }
    else if(day === 4){
        dday =' 목'
    }
    else if(day === 5){
        dday = '금'
    }
    else if( day === 6){
        dday = '토'
    }


    let img = `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`

  return (
    <div className='box'>
        <h2>{year}/{month}/{date} {dday}요일</h2>
        <img src={img} alt="" />
      <h3>
        오늘의 {weather?.name === 'Gwangju' ? '광주' : weather?.name}의 기온은 {weather?.main.temp}도,
        체감온도는{weather?.main.feels_like}도입니다.
      </h3>
    </div>
  )
}

export default Weather
