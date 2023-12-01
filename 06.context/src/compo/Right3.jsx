import { useContext } from "react";
import {CountContext} from '../Ex03'

function Right3() {
    const {number, setNumber} = useContext(CountContext)
    const inc =()=>{
        setNumber(number+1)
    }

    return (
      <div>
        <h1>Right3</h1>
        <button onClick={inc}>
          +
        </button>
      </div>
    );
  }
  export default Right3;
  