import React, {useState} from 'react';

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
                    {
                        user.fName.length < 2 && user.fName.length > 0 ?
                        <p>First name must at least 2 characters</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input name='lName' type="text" value={user.lName} onChange={changeHandler} />
                    {
                        user.lName.length < 2 && user.lName.length > 0?
                        <p>Last name must at least 2 characters</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input name='email' type="text" value={user.email} onChange={changeHandler} />
                    {
                        user.email.length < 2 && user.email.length > 0?
                        <p>Email name must at least 2 characters</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input name='password' type="password" value={user.password} onChange={changeHandler} />
                    {
                        user.password.length < 8 && user.password.length > 0?
                        <p>Password must at least 8 characters</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input name='confirmPassword' type="password" value={user.confirmPassword} onChange={changeHandler} />
                    {
                        user.password == user.confirmPassword ?
                        '':
                        <p>Password Dont match</p>
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>
)}

export default Form;