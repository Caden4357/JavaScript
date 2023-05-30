import React, {useState, useContext} from 'react';
import { countContext } from '../context/CountContext';

const UserForm = (props) => {
    const {loggedInUser, setLoggedInUser} = useContext(countContext)

    const changeHandler = (e) => {
        setLoggedInUser(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    return (
        <div>
            <h2>Log In!</h2>
            <form>
                <label htmlFor="username">Username: </label>
                <input type="text" name='username' onChange={changeHandler} value = {loggedInUser.username}/>
                <label htmlFor="email">Email: </label>
                <input type="email" name='email' onChange={changeHandler} value = {loggedInUser.email}/>
            </form>
        </div>
)}

export default UserForm;