import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos,toDo,setTodos,toStart,toEnd}) => {
  return (
    <div className='todo-list'>
        <h5 className='todo-list=tit'>{toDo} {todos.length}개</h5>
        <ul className='todo-list-ul'>
            {todos.map((todo)=>(                
                <TodoItem key={todo.id} todos={todos} setTodos={setTodos} todo={todo} />
            ))}
        </ul>
    </div>
  )
}

export default TodoList