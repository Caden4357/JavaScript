import React, {useState} from 'react';

const Display = (props) => {
    // console.log(props.user.fName);
    const {fName, lName, email, password, confirmPassword} = props.user
    return (
        <div>
            <p>First Name: {fName}</p>
            <p>Last Name: {lName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
)}

export default Display;