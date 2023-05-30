import React, {useState, useReducer} from 'react';


const USER_ACTIONS = {
    SET_NAME: 'set-name',
    SET_EMAIL: 'set-email',
    SET_PASSWORD: 'set-password'
}

const USER_VALIDATIONS = {
    SET_NAME_ERR: 'set-name-err',
    SET_EMAIL_ERR: 'set-email-err',
    SET_PASSWORD_ERR: 'set-password-err'
}

const initialUserErrState = {
    nameErr: '',
    emailErr: '',
    passwordErr: ''
}

const initialUserState = {
    name: '',
    email: '',
    password: ''
}

const reducer = (state, action) => {
    switch (action.type){
        case USER_ACTIONS.SET_NAME: 
            return {...state, name:action.payload}

        case USER_ACTIONS.SET_EMAIL: 
            return {...state, email:action.payload}

        case USER_ACTIONS.SET_PASSWORD: 
            return {...state, password:action.payload}
    }
}

const errReducer = (state, action) => {
    switch (action.type){
        case USER_VALIDATIONS.SET_NAME_ERR:
            return {...state, nameErr: action.payload}

        case USER_VALIDATIONS.SET_EMAIL_ERR:
            return {...state, emailErr: action.payload}

        case USER_VALIDATIONS.SET_PASSWORD_ERR:
            return {...state, passwordErr: action.payload}
    }
}

const Form2 = (props) => {

    const [user, dispatch] = useReducer(reducer, initialUserState)
    const [errors, errorDispatch] = useReducer(errReducer, initialUserErrState)

    const changeHandler = (e) => {
        let name = e.target.name.toUpperCase();
        dispatch({type:USER_ACTIONS[`SET_${name}`], payload: e.target.value})
    }

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">First Name</label>
                    <input type="text"
                    name='name'
                    onChange={changeHandler}
                    value={user.name}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    name='email'
                    onChange={changeHandler}
                    value={user.email}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                    name='password'
                    onChange={changeHandler}
                    value={user.password}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
)}

export default Form2;