import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from '../node_modules/axios/index';

function App() {
  const [data, setData] = useState(null);

  const onClick = async () => {
    try{
      
      let response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  
      setData(response.data);
    }catch(e){
      console.log(e);
    }
  }

  return (
    <div className="App">
      <div>
        <button onClick={onClick}>읽어오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
    </div>
  );
}

export default App;
