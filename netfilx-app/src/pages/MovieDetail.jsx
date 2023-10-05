import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import api from '../api'

const MovieDetail = () => {
    const {movie_num} = useParams()
    const [detailData, setDetailData] = useState(null)
    // const genreData = useSelector((state)=>state.movie.genre)
    const [review, setReview] = useState(null)

    
    
    // Movie Id 값을 useParams로 가져와서 axios로 영화정보 가져오기
    useEffect(()=>{
      if(movie_num !== undefined){
        api.get(`/movie/${movie_num}`, {params : {language: 'ko-KR'}})
          .then((res=>{
            setDetailData(res.data)
          }))

        api.get(`/movie/${movie_num}/reviews`)
          .then((res)=>{
            setReview(res.data)
          })
      }
    },[])

    useEffect(()=>{
      if(review !== null){
        console.log(review)
      }
    },[review])

    // 가져온 영화정보에서 poster url 값으로 background에 포스터 적용
    const poster_style = {
      backgroundImage : `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${detailData?.poster_path})`
    }



  return (
    <div className='movie-container' style={{backgroundColor : 'black'}}>
      <div className='movie-info'>
          <div className='movie-poster' style={poster_style}></div>
          <div className='movie-script'>
            {detailData?.genres.map((item,index)=><Badge key={index} bg="danger" className='btn-genre'>{item.name}</Badge>)}
            <h1 style={{margin: '20px 0px 20px 0px'}}>{detailData?.title}</h1>
            <h5 style={{margin: '20px 0px 20px 0px'}}>{detailData?.tagline}</h5>
            <p>출시일 : {detailData?.release_date}</p>
            <p> 러닝 타임 : {detailData?.runtime}분</p>
            <p>평점 : {Math.floor(detailData?.vote_average *10)/10}점</p>
            <p> {detailData?.adult? '청소년 관람 불가': '전체 이용가'}</p>
            <hr></hr>
            <p style={{margin: '20px 0px 20px 0px'}}>{detailData?.overview}</p>
            <hr></hr>

          </div>
      </div>
        <div className='movie-review'>
          <h1>Review</h1>
          <hr></hr>
          {review?.results.map((item,index)=>
          <div key={index}>
            <h3 style={{marginTop : '20px', marginBottom : '20px'}}>{item.author}</h3>
            <p>{item.content}</p>
            <hr></hr>
          </div>)}
        </div>


      
    </div>
  )
}

export default MovieDetail