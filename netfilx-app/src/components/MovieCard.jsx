import React, { useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import '../../src/App.css'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({data}) => {

    const genreData = useSelector((state)=>state.movie.genre)
    const movieData = useState(data)
    const navi = useNavigate()

    useEffect(()=>{
        if(genreData !== null){
            // console.log(genreData)
        }
    },[])

    const div_style = {
        backgroundImage : `url(https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path})`,
        backgroundSize : 'cover',
        width: '200px',
        height: '300px',
        marginLeft : '30px'
    }

    const movieDetailClick = ()=>{
        console.log(data)
        navi(`/movies/${data.id}`)
    }



  return (
    <div className='card-p' onClick={movieDetailClick}>
        <div style={div_style} className='movie-card'></div>
        <div className='movie-detail'>
            <h3>{data.title}</h3>
            <br/>
            {data.genre_ids.map((item,index)=><Badge key={index} bg="danger" className='btn-genre'>{
                genreData.find(({id})=> id === item).name
            }</Badge>)}
            <br/><br/>
            <h5>평점 : {data.vote_average}점 | {data.adult?'성인':'청소년'}</h5>
        </div>
        
    </div>
  )
}

export default MovieCard