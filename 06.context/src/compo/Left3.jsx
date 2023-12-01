import { useContext } from 'react';
import {CountContext} from '../Ex03'
function Left3() {
    const {number} = useContext(CountContext)
    return (
      <div>
        <h1>Left3 : {number}</h1>
      </div>
    );
  }
  export default Left3;
  