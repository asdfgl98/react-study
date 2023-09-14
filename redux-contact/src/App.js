import './App.css';
import ContactForm from './components/ContactForm';
import {useSelector} from 'react-redux'
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className='box'>
      <h1>연락처 App</h1>
      <div className='contact-box'>
      <ContactForm/>
      <div>
      <SearchBox/>
      <ContactList/>
      </div>
      </div>
    </div>
  );
}

export default App;
