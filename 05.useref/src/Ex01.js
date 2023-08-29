import React, {useRef} from 'react'


const Ex01 = () => { 
    
    const inputRef = useRef()   

    const handleClick2 = () =>{
        console.log(inputRef)
        console.log(inputRef.current)
        console.log(inputRef.current.value)
    }

  return (
    <div>
        <form>
            <input type="text" ref={inputRef}></input>
            <input onClick={handleClick2} type='button' value="클릭"></input>
        </form>
    </div>
  )
}

export default Ex01