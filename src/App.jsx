import { useState } from 'react';
import Header from './component/Header';
import Home from './component/Home';
import './scss/App.scss';

function App() {
  const [filter, setFilter] = useState([])
 
  function filterAndSet(event, method) {
    if (!filter.includes(event.dataset[method])){
      setFilter(i => [...i].concat([event.dataset[method]]))
    }
  }

  return <>
    <Header filter={filter} setFilter={setFilter}/>
    <Home filterAndSet={filterAndSet} filter={filter} />
  </>
}

export default App;