import React, {useState} from 'react';

const Display = (props) => {
    const {todoList, setTodoList} = props
    
    const deleteTodo = (id) => {
        const updatedList = todoList.filter((todo, idx) => idx !== id)
        setTodoList((updatedList))
    }

    const handleTodo = (id) => {
        // console.log(uuid);
        const updatedTodos = todoList.map((todo, idx) => {
            if (id === idx){
                todo.isCompleted = !todo.isCompleted;
                // console.log("Here");
            }
            // console.log(todo);
            return todo;
        })
        setTodoList(updatedTodos);
    }
    const completed = {
        textDecoration: "line-through",
        fontWeight: "bold"

    }
    const bold = {
        fontWeight: "bold"
    }
    return (
        <div>
            {
                todoList.map((todo, idx) => (
                    <div key={todo.id} className='w-50 mx-auto border border-dark m-5'>
                        {
                            todo.isCompleted?
                            <p  style={completed}>{todo.todo}</p>:
                            <p style={bold}>{todo.todo}</p>
                        }
                        <span>Completed</span>
                        <input type="checkbox" name="completed" id="completed" defaultChecked={todo.isCompleted} onClick={(e) => handleTodo(idx)}/>
                        <button onClick={(e) => deleteTodo(idx)}>Delete</button>
                    </div>
                ))
            }
        </div>
)}

export default Display;