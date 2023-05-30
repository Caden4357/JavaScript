import React, {useState} from 'react';
import Display from './Display';

const Form = (props) => {

    const [user, setUser] = useState({
        fName: "",
        lName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const changeHandler = (e) => {
        // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <form>
                <h1>Forms with React</h1>
                <div>
                    <label>First Name: </label> 
                    <input name='fName' type="text" value={user.fName} onChange={changeHandler} />
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input name='lName' type="text" value={user.lName} onChange={changeHandler} />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input name='email' type="text" value={user.email} onChange={changeHandler} />
                </div>
                <div>
                    <label>Password: </label>
                    <input name='password' type="password" value={user.password} onChange={changeHandler} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input name='confirmPassword' type="password" value={user.confirmPassword} onChange={changeHandler} />
                </div>
                <input type="submit" value="Create User" />
            </form>

            <Display user = {user}/>
        </div>
)}

export default Form;