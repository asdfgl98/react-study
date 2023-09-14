import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos,toDo,setTodos,toStart}) => {

  return (
    <div className='todo-list'>
        <h5 className='todo-list=tit'>{toDo} {toStart.length}개</h5>
        <ul className='todo-list-ul'>
            {toStart.map((todo)=>(                
                <TodoItem key={todo.id} todos={todos} setTodos={setTodos} todo={todo} />
            ))}
        </ul>
    </div>
  )
}

export default TodoList