import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
    const {movie_num} = useParams()
  return (
    <div>{movie_num}</div>
  )
}

export default MovieDetail