import React, {useState} from 'react';
import Display from './Display';

const TodoForm = (props) => {  
    const {todoList,setTodoList} = props
    const [todo, setTodo] = useState({
        id:0,
        todo:"",
        isCompleted:false
    })

    const changeHandler = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let newTodo = {...todo, id:crypto.randomUUID()}
        setTodoList(originalList => [...originalList, newTodo])
        setTodo({
            todo:"",
            isCompleted:false
        })
    }
    return (
        <div>
            <form onSubmit={submitHandler} className='w-50 mx-auto'>
                <label htmlFor="todo">Todo:</label>
                <input type="text" name="todo" className='form-control' id="todo" value={todo.todo} onChange={changeHandler}/>
                <button className='btn btn-primary w-100'>Add</button>
            </form>
        </div>
)}

export default TodoForm;