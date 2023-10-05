import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';


const MovieFilter = () => {


    const data = useSelector((state)=>state.movie.popularMovies)
  const [movieData, setMovieData] = useState(null)

  useEffect(()=>{
    if(data != null){
      console.log(data)
      setMovieData(data)
    }
  },[data])
    
    const poster = `https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`
    console.log(data)

  return (
    <div style={{marginRight : '20px'}}>
            <Row xs={1} md={3} className="g-4">
    {data.map((item, idx) => (
      <Col key={idx}>
        <Card>
          <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
            {item.release_date}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
    </div>
  )
}

export default MovieFilter