import React, {useRef} from 'react'


const TodoInput = ({todos, setTodos}) => {

    let input = useRef()

    const handleClick = ()=>{
        let inputVal = input.current.value
        if(inputVal !== ''){
            setTodos([
                ...todos,
                {id : new Date().getTime() + Math.random(), text : inputVal, complete:false}
            ])            
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