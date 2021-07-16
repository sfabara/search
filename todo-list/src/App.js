
import './App.css';
import NamesList from './components/NamesList.js'
import SearchBar from './components/SearchBar.js'
import Input from './components/Input'

import {useState} from 'react'

const App = () => {
  const [search, setSearch] = useState('')
  const [count, setCount] = useState(0)

  console.log(search)


  return (

    

    <div className="App">
      <h1>Hello from main App</h1>
      <p> {count} </p>
      <Input count = {count} setCount={setCount}/>
      <SearchBar setSearch={setSearch}/>

      <NamesList search={search}/>

     
 
    </div>
  );
}

export default App;
