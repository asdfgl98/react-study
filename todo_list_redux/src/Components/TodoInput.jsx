import React, {useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {TodoRedcerActions} from '../redex/reducers/todoSlice'


const TodoInput = ({todos, setTodos}) => {

    const  todoss = useSelector((state)=>state.todo.todos)
    const dispatch = useDispatch()

    let input = useRef()

    const handleClick = ()=>{
        let inputVal = input.current.value
        if(inputVal !== ''){
            // setTodos([
            //     ...todos,
            //     {id : new Date().getTime() + Math.random(), text : inputVal, complete:false}
            // ])
            dispatch(TodoRedcerActions.addTodo({id : new Date().getTime() + Math.random(), text : inputVal, complete:false}))
        }
        input.current.value = ''
        input.current.focus()
    }



  return (
    <div className='todo-inputbox'>
        <input type='text'
               className='todo-inputbox-input'
               placeholder='할 일을 입력해주세요'
               ref={input}
               />
        <input type='button' className='todo-inputbox-add-btn' value='등록' onClick={handleClick}/>
    </div>
  )
}

export default TodoInput