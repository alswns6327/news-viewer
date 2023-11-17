import logo from './logo.svg';
import './App.css';
import { useCallback, useRef, useState } from 'react';
import axios from '../node_modules/axios/index';
import NewsList from './NewsList';
import Categories from './components/Categories';

function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <div className="App">
      <Categories onSelect={onSelect} category={category}/>
      <NewsList category={category}/>
    </div>
  );
}

export default App;
