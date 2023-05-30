import React, {useState} from 'react'
import "./nav.css"


const Nav = (props) => {
    return (
        <div className='todo-header'>
            <h1>Welcome {props.name}</h1>
            <h2>Your Todo List</h2>
        </div>
    )
}
export default Nav