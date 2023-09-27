import React from 'react'

const Banner = ({movieData}) => {

    const div_style = {
        height : '100vh',
        backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieData?.poster_path})`,
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat'
    }

  return (
    <div style={div_style} className='main-poster'>
        <div className='poster'>
        <h1>{movieData?.title}</h1>
        <p>{movieData?.overview}</p>
        </div>
    </div>
  )
}

export default Banner