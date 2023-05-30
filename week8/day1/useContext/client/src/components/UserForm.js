import React, {useState, useContext} from 'react';
import { userContext } from '../context/userContext';
const UserForm = (props) => {
    const {user, setUser} = useContext(userContext)
    const [userForm, setUserForm] = useState({
        email:'',
        password:''
    })

    const submitHandler = (e) => {
        e.preventDefault();
        setUser(userForm)
        setUserForm({
            email:'',
            password:''
        })
    }

    return (
        <div>
            <h1>Sign in</h1>
            <form onSubmit={submitHandler}>
                <label>Email</label>
                <input type="text" name="email" onChange={(e) => setUserForm({...userForm, email: e.target.value})} value={userForm.email} />

                <label>Password</label>
                <input type="text" name="password" onChange={(e) => setUserForm({...userForm, password: e.target.value})} value={userForm.password} />
                <button>Submit</button>
            </form>
        </div>
)}

export default UserForm;