import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { changeName } from './store/mudles/user/action';
import { useState } from 'react';

function App() {
  
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);


  const handleclick = () => {
    dispatch(changeName(newName))
  }

  return (
    <div className="App-header">
        <h2>User Name: {user.name}</h2>

        <input onChange = {(e) => setNewName(e.target.value)} />
        <button onClick = {handleclick} >Emviar</button>

    </div>
  );
}

export default App;
