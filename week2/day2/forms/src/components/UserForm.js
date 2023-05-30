import React, { useState } from  'react';
    
const UserForm = (props) => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })
    // ! day3
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [userList, setUserList] = useState([])

    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        // ! day3

        // if (user.username.length < 3){
        //     setErrors({ username: "Username must be 3 characters or more"})
        //     console.log("here");
        // }
        // if (user.email.length < 3){
        //     setErrors({ email: "Email must be 3 characters or more"})
        // }
        // if (user.password.length < 6){
        //     setErrors({ password: "Password must be 6 characters or more"})
        // }
        // console.log(errors);


        // setUserList([...userList, user])
        // setUser({
        //     username: "",
        //     email: "",
        //     password: ""
        // })
    }

    const changeHandler = (e) => {
        // console.log(e.target.value);
        // ! day3??
        setUser({...user, [e.target.name]: e.target.value})
    }

    return(
        <div>

            <form onSubmit={ createUser }>
                <h1>Forms with React</h1>
                <div>
                    <label>Username: </label> 
                    <input name='username' type="text" value={user.username} onChange={changeHandler} />
                    {/* {
                        user.username.length < 3 ?
                        <p>Username must be more than 3 characters</p>:
                        ''
                    } */}
                    {
                        errors['username'].length > 1?
                        <p>{errors['username']}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input name='email' type="text" value={user.email} onChange={changeHandler} />
                    {/* {
                        user.email.length < 3 ?
                        <p>Username must be more than 3 characters</p>:
                        ''
                    } */}
                    {
                        errors['email'].length > 1?
                        <p>{errors['email']}</p>:
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input name='password' type="password" value={user.password} onChange={changeHandler} />
                    {/* {
                        user.password.length < 6 ?
                        <p>Username must be more than 3 characters</p>:
                        ''
                    } */}
                    {
                        errors['password'].length > 1?
                        <p>{errors['password']}</p>:
                        ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>

            {/* Separate this into a display component this will be wk2 day3*/}
            {/* <h2>Users here: </h2>
            {
                userList.map((user, idx) => (
                    <div>
                        <h3>username: {user.username}</h3>
                        <h4>email: {user.email}</h4>
                        <h5>password: {user.password}</h5>

                    </div>
                ))
            } */}
        </div>
    );
};
    
export default UserForm;
