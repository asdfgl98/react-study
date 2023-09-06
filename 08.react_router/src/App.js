import {Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import ProductDetail2 from './components/ProductDetail2';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}/>

    {/* URL 파라미터 형식으로 Route 구성하기 */}
    <Route path='/product/:pro_no' element={<ProductDetail/>}/>
    <Route path='/productDetail2' element={<ProductDetail2/>}/>

    </Routes>
  );
}

export default App;
