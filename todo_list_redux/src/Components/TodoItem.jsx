import React, { useRef, useState } from 'react'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useDispatch} from 'react-redux'

import {TodoRedcerActions} from '../redex/reducers/todoSlice'

const TodoItem = ({ todos, setTodos, todo }) => {
  
  const dispatch = useDispatch()

  let checkBtn = useRef()

  const [show, setShow] = useState(false)

  // 수정 클릭
  const handleChange = () => {    
    let input =document.querySelector('.form-control')
    let val  = input.value
    if(input.value !== ''){
      let id = checkBtn.current.id
      setShow(false)
      dispatch(TodoRedcerActions.textChangeTodo({id:id,val:val}))
      
    }
    else{
      alert('수정사항을 입력해주세요')
    }
  }

  // 삭제(휴지통) 클릭
  const deleteTodo = ()=>{
      let new_todo = todos.filter((item) => item.id !== todo.id)
      dispatch(TodoRedcerActions.deleteTodo(todo.id))
  }

  // 수정(연필) 클릭
  const handleShow = () => {    
    setShow(true)
  }  
  
  // 취소 클릭
  const handleClose = () => setShow(false)
  
  // check 버튼 클릭
  const todoClick = () => {
    let id = checkBtn.current.id
    dispatch(TodoRedcerActions.setTodo(id))
  }

  return (
    <li className="todo-item" ref={checkBtn} id={todo.id}>
      {todo.complete === false ? (
        <FaRegCircle
          style={{ color: 'green' }}
          className="todo-item-checkbox"
          onClick={todoClick}
        />
      ) : (
        <FaCheckCircle
          style={{ color: 'green' }}
          className="todo-item-checkbox"
          onClick={todoClick}
        />
      )}
      <span
        className={`todo-item-content ${
          todo.complete ? 'todo-item-content-checked' : ''
        }`}
      >
        {todo.text}
      </span>

      {todo.complete ? null :(<button className="todo-item-edit-btn" onClick={handleShow}>✏️</button>)}
      <button className="todo-item-delete-btn" onClick={deleteTodo}>🗑️</button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>수정</Modal.Title>
        </Modal.Header>
        <Modal.Body> <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">할 일 수정</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          
        />
      </InputGroup></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="primary" onClick={handleChange}>
            수정
          </Button>
        </Modal.Footer>
      </Modal>
    </li>
  )
}

export default TodoItem
