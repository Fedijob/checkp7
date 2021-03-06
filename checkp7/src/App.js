
import { useState } from 'react';
import  Profile  from './components/Profile';
import './App.css';
import { Button } from 'bootstrap';

function App() {
  const [Person, setPerson] = useState({
  Fullname:"fedi",
  Bio:"I dont know",
  Img:"data:image/png;base64,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",
  profession:"Student",
  })
  const [Show, setShow] = useState(false)
  return (
    <div style={{marginTop:'200px',marginLeft:'700px'}}>
      <button onClick={()=>setShow(!Show)}>Click here to show profile</button>
      {Show?<Profile p={Person}/>:null}
   
    </div>
  );
}

export default App;
