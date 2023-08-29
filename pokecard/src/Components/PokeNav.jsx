import React from 'react'
import Nav from 'react-bootstrap/Nav';


const PokeNav = ({click}) => {

    let navItems = ['All', '1~50', '51~100', '101~151']

  return (
    <ul>
        <Nav className="justify-content-center" activeKey="/home">
        {navItems.map((item,index)=>(
        <Nav.Item key={index}>
            <Nav.Link eventKey="disabled" onClick={click}>{item}</Nav.Link>
        </Nav.Item>
        ))}
      </Nav>
    </ul>
  )
}

export default PokeNav