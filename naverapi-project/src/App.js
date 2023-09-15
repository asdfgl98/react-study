import {Routes, Route} from 'react-router-dom'
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BookInfo from './components/BookInfo';

function App() {
  return (
    <div className='main'>
      <h1>책</h1>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
      </Routes>
      <div className='books'>
       <BookInfo/>       
      </div>
    </div>
  );
}

export default App;
