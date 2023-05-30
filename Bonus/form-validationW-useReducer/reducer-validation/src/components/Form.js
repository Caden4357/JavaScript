import React, {useState, useReducer} from 'react';


const ACTIONS = {
    SET_NAME: 'set-name',
    SET_NAME_ERROR: 'set-name-error',
    SET_EMAIL: 'set-email',
    SET_EMAIL_ERROR: 'set-email-error',
    SET_PASSWORD: 'set-password',
    SET_PASSWORD_ERROR: 'set-password-error'
}


//! I feel like this is a really inefficient way to use useReducer

const initialState = {
    name:{
        value:'',
        error:null
    },
    email:{
        value:'',
        error:null
    },
    password: {
        value:'',
        error:null
    }
}

const reducer = (state, action) => {
    // console.log(state);
    switch (action.type){
        case ACTIONS.SET_NAME: 
            return {...state, name:{...state.name, value: action.payload}}

        case ACTIONS.SET_NAME_ERROR: 
            return {...state, name:{...state.name, error: action.payload}}

        case ACTIONS.SET_EMAIL: 
            return {...state, email:{...state.email, value: action.payload}}

        case ACTIONS.SET_EMAIL_ERROR: 
            return {...state, email:{...state.email, error: action.payload}}

        case ACTIONS.SET_PASSWORD: 
            return {...state, password:{...state.password, value: action.payload}}

        case ACTIONS.SET_PASSWORD_ERROR: 
            return {...state, password:{...state.password, error: action.payload}}

        case 'submit':
            // console.log('PAYLOAD', action.payload);
            // console.log('STATE', state);
            state.name.error = null
            state.email.error = null
            state.password.error = null
            return initialState

        default:
            return {...state}
    }
}

const Form = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const changeHandler = (e) => {
        let name = e.target.name.toUpperCase()
        dispatch({type:ACTIONS[`SET_${name}`], payload: e.target.value})
    }


    const submitHandler = (e) => {
        e.preventDefault();

        if (state.name.value.length < 5){
            dispatch({type:ACTIONS.SET_NAME_ERROR, payload: 'Name must be more than 5 characters'})
        }
        if (state.email.value.length < 5){
            dispatch({type:ACTIONS.SET_EMAIL_ERROR, payload: 'Email must be more than 5 characters'})
        }
        if (state.password.value.length < 8){
            dispatch({type:ACTIONS.SET_PASSWORD_ERROR, payload: 'Password must be more than 8 characters'})
        }
        else{
            dispatch({type: 'submit'})
        }
        // dispatch({type:'submit'})
    }

    console.log('STATE 2', state);


    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">First Name</label>
                    <input type="text"
                    name='name'
                    onChange={changeHandler}
                    value={state.name.value}
                    />
                    {
                        state.name.error? 
                        <p>{state.name.error}</p>:
                        null
                    }
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    name='email'
                    onChange={changeHandler}
                    value={state.email.value}
                    />
                    {
                        state.email.error? 
                        <p>{state.email.error}</p>:
                        null
                    }
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                    name='password'
                    onChange={changeHandler}
                    value={state.password.value}
                    />
                    {
                        state.password.error? 
                        <p>{state.password.error}</p>:
                        null
                    }
                </div>
                <button>Submit</button>
            </form>
            {/* {
                state.map((user) => (
                    <p>{user.name}</p>
                ))
            } */}
        </div>
)}

export default Form;