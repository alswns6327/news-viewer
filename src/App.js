import logo from './logo.svg';
import './App.css';
import { useCallback, useRef, useState } from 'react';
import axios from '../node_modules/axios/index';
import NewsList from './NewsList';
import Categories from './components/Categories';
import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import NewsPage from './pages/NewsPage';

function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => {setCategory(category);}, []);

  return (
    <Routes>
      <Route path="/:category?" element={<NewsPage/>}></Route>
    </Routes>
  );
}

export default App;
