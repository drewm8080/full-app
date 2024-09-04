import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Search from './components/search';
import {useState} from 'react';



function App() {
  const [word,setWord] = useState('');
  function handleSearchSubmit(e) {
    e.preventDefault()
    console.log(word);
  }
  return (
    <div>
      <Header title="Images Gallery"/>
      <Search word ={word} setWord= {setWord} handleSubmit = {handleSearchSubmit}/>
    </div>
  );
}

export default App;
