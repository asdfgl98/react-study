import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movies' element={<Movies/>}></Route>
        <Route path='/movies/:movie_num' element={<MovieDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
