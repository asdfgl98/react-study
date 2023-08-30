import React,{useState} from 'react'
import TodoInput from '../Components/TodoInput'
import TodoList from '../Components/TodoList'

const TodoHome = () => {
    const [todos, setTodos] = useState([])
    console.log('qq',todos)


    let toStart = todos.filter((item)=>item.complete === false)
    let toEnd = todos.filter((item)=>item.complete === true)



    
  return (
    <div className="todo-container">
        <h1 className='todo-tit'>ToDo List</h1>
        {/* todo 추가하는 영역 */}
        <TodoInput todos={todos}  setTodos={setTodos}/>

        {/* 해야할 일 */}
        <TodoList todos={todos} toStart={toStart} setTodos={setTodos} toDo="할 일"/>



        {/* 완료된 일 */}
        <TodoList todos={todos} toEnd={toEnd} setTodos={setTodos}  toDo="완료"/>
    </div>
  )
}

export default TodoHome