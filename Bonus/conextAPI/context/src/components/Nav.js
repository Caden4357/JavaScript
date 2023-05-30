import React, {useState, useContext} from 'react';
import { countContext } from '../context/CountContext';

const Nav = (props) => {
    const {count, setCount, loggedInUser, setLoggedInUser} = useContext(countContext)
    return (
        <div>
            <div>
                <h1>My counter site</h1>
                <h2>Welcome back {loggedInUser.username}!</h2>
            </div>
            <div>
                <span>Current Count: {count.count}</span>
                
            </div>
        </div>
)}

export default Nav;