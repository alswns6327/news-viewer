import logo from './logo.svg';
import './App.css';
import { useCallback, useRef, useState } from 'react';
import axios from '../node_modules/axios/index';

function App() {
  const [data, setData] = useState(null);

  const [category, setCategory] = useState(["", "business", "entertainment", "general", "health", "science", "sports", "technology"]);

  let currentCategory = useRef("");

  const onClick = async () => {
    try{
      

      //let response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  
      let response;
      if(currentCategory){
        response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&category=${currentCategory.current}&apiKey=70414065b47b4dedb2823a8b089b9a1b`);
      }else{
        response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=70414065b47b4dedb2823a8b089b9a1b`);
      }

      setData(response.data);
    }catch(e){
      console.log(e);
    }
  }

  const categoryChange = useCallback(e => {
    currentCategory = e.target.value;
  }, []);

  return (
    <div className="App">
      <div>
        <button onClick={onClick}>뉴스 불러오기</button>
      </div>
      <ul>
        {category.map(ca => (<li key={ca}>
          <label>
            <input type='radio' name='category' onChange={categoryChange} value={ca}/>
            {ca}
          </label>
        </li>))}
      </ul>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
    </div>
  );
}

export default App;
