import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Movies = () => {


  let data = useSelector((state)=>state.movie.popularMovies)
  const [movieData, setMovieData] = useState(null)

  useEffect(()=>{
    if(data != null){
      setMovieData(data)
    }
  },[data])

  const filterClick = (e)=>{
    const filterCheck = e.target.innerText
    if(filterCheck === '제목 오름차순'){
      let new1 = [...data]
      new1.sort((a,b)=>a.title.localeCompare(b.title))
      setMovieData(new1)        
    }
    else if(filterCheck === '제목 내림차순'){
      let new1 = [...data]
      new1.sort((a,b)=>b.title.localeCompare(a.title))
      setMovieData(new1)   
    }
    else if(filterCheck === '평점 오름차순'){
      let new1 = [...data]
      new1.sort((a,b)=> a.vote_average - b.vote_average)
      setMovieData(new1)   
    }
    else if(filterCheck === '평점 내림차순'){
      let new1 = [...data]
      new1.sort((a,b)=> b.vote_average - a.vote_average)
      setMovieData(new1)   
    }
    else if(filterCheck === '인기도 오름차순'){
      let new1 = [...data]
      new1.sort((a,b)=> a.popularity - b.popularity)
      setMovieData(new1)   
    }
    else if(filterCheck === '인기도 내림차순'){
      let new1 = [...data]
      new1.sort((a,b)=> b.popularity - a.popularity)
      setMovieData(new1)   
    }
  }


  

  return (
    <div>
      
      <div className='movie-filter-box'>
        <div className='movie-filter-ui'>
          <h1>인기 영화 필터링</h1>
          {/* 필터링 드랍다운 */}
          <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          정렬방식을 선택하세요.
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={filterClick}>제목 오름차순</Dropdown.Item>
          <Dropdown.Item onClick={filterClick}>제목 내림차순</Dropdown.Item>
          <Dropdown.Item onClick={filterClick}>평점 오름차순</Dropdown.Item>
          <Dropdown.Item onClick={filterClick}>평점 내림차순</Dropdown.Item>
          <Dropdown.Item onClick={filterClick}>인기도 오름차순</Dropdown.Item>
          <Dropdown.Item onClick={filterClick}>인기도 내림차순</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>


        </div>
        <div className='movie-filter-result'>
        <Row xs={1} md={5} className="g-4">
    {movieData?.map((item, idx) => (
      <Col key={idx}>
        <Card>
          <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
            {item.release_date}<br/>
            평점 : {item.vote_average}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
        </div>
      </div>
    </div>
  )
}

export default Movies