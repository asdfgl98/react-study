import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const BookDetail = ({data}) => {
  return (
    <div className='one-book'>
        <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={data.image} style={{ height: '300px' }}/>
      <Card.Body>
        <Card.Title>{data.title.substr(0,40)}</Card.Title>

      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>가격 : {data.discount}원</ListGroup.Item>
        <ListGroup.Item>저자 : {data.author.replace(/\^/g,',')}</ListGroup.Item>
        <ListGroup.Item>출판사 : {data.publisher}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button className='btn'variant="primary" onClick={()=>{window.open(data.link)}}>구매하기</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default BookDetail