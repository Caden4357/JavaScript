import React from 'react';
import './todo.css'

const TodoList = (props) => {

    // ? what type of data is props??
    // console.log(typeof(props));
    return(
        <ul className='todo-list'>
            <li>{props.todo}</li>
        </ul>
    )
}

export default TodoList;