import React,{useRef, useState} from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const TodoItem = ({todos, setTodos, todo}) => {
    let checkBtn = useRef()

    const todoClick = ()=>{
        let id = checkBtn.current.id
        let new_todo = todos.map((item)=>({           
            ...item,
            complete: item.id == id ? !item.complete : item.complete
     
        }))
        // console.log('new',new_todo)
        setTodos(new_todo)

    }
    

  return (
        <li className='todo-item' ref={checkBtn} id={todo.id}>
            <FaCheckCircle
                style={{color:'green'}}
                className="todo-item-checkbox"
                onClick={todoClick}
            />
            <span className='todo-item-content'>{todo.text}</span>

            <button className='todo-item-edit-btn'>✏️</button>
            <button className='todo-item-delete-btn'>🗑️</button>
        </li>
  )
}

export default TodoItem