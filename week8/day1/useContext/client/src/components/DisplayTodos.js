import React, {useState, useContext, useReducer} from 'react';
import { userContext } from '../context/userContext';

const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo'
}
const reducer = (todos, action) => {
    // console.log(action);
    // console.log(todos);
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...todos, {id: new Date(), todo: action.payload.todo, isComplete:false}]
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo) => {
                // console.log(idx, action.payload.idx);
                if (todo.id === action.payload.id){
                    console.log('here');
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo
            })
    }
}


const DisplayTodos = (props) => {
    const {user, setUser} = useContext(userContext)
    const [todoList, dispatch] = useReducer(reducer, [])
    const [todo, setTodo] = useState('')

    const handleTodo = (e) => {
        e.preventDefault()
        dispatch({type:ACTIONS.ADD_TODO, payload: {todo:todo}})
        setTodo('')
    }
    const toggleTodo = (id) => {
        dispatch({type:ACTIONS.TOGGLE_TODO, payload: {id:id}})
    }
    return (
        <div>
            {
                user?
                <h1>Welcome in {user.email}</h1>:
                null
            }
            <form onSubmit={handleTodo}>
                <label htmlFor="todo">Todo:</label>
                <input type="text" 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}/>
                <button>Add</button>
            </form>
            {
                todoList.map((todo, idx) => (
                    <div key={idx}>
                        <p style={{ color: todo.isComplete ? '#A9A9A9': '#000000'}}>Todo: {todo.todo}</p>
                        <button onClick={() => toggleTodo(todo.id)}>Toggle Todo</button>
                    </div>
                ))
            }
        </div>
)}

export default DisplayTodos;