import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import Display from './components/Display';
function App() {
  const [todoList, setTodoList] = useState([])
  return (
    <div className="App">
      <TodoForm
        todoList = {todoList}
        setTodoList = {setTodoList}
      />
    <Display 
      todoList={todoList} 
      setTodoList={setTodoList}
    /> 
    </div>
  );
}

export default App;
