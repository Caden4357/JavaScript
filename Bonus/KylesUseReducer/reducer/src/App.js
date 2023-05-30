import {useReducer, useState} from 'react'
import './App.css';

const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

const reducer = (todos, action) => {
  console.log(action);
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, {id: new Date(), todo: action.payload.todo, isCompleted:false}]
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id){
          return {...todo, isCompleted: !todo.isCompleted}
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [todo, setTodo] = useState('')

  const handleTodo = (e) => {
    e.preventDefault();
    dispatch({type:ACTIONS.ADD_TODO, payload: {todo:todo} })
    setTodo('')
  }

  const toggleTodo = (id) => {
    dispatch({type:ACTIONS.TOGGLE_TODO, payload: {id:id}})
  }

  const deleteTodo = (id) => {
    dispatch({type:ACTIONS.DELETE_TODO, payload: {id:id}})
  }

  const changeHandler = (e) => {
    setTodo(e.target.value)
  }
  console.log(todos);
  return (
    <div className="App">
      <form onSubmit={handleTodo}>
        <label htmlFor="todo">Todo:</label>
        <input type="text" 
        value={todo}
        onChange={changeHandler}/>
      </form>
      {
        todos.map((todo) => (
          <div key={todo.id}>
            <p style={{ color: todo.isCompleted ? '#A9A9A9': '#000000'}}>Todo: {todo.todo}</p>
            <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
