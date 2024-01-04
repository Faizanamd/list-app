import { useState } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  const [toDo, setToDo] = useState([]);

  return (
    <div className='mainPage'>
      <div className='leftPage'>
        <ToDoList toDo={toDo} setToDo={setToDo} />
      </div>
      <div className='rightPage'>
        <ToDoForm toDo={toDo} setToDo={setToDo} />
      </div>
    </div>
  );
}

export default App;