import React, {useState} from 'react';

const Person = (props) => {
    console.log(props.users);
    const {users} = props
    return (
        <div>
            {
                users.map((user, idx) => (
                    <div key={idx}>
                        <h1>{user.name}</h1>
                        <p>Age: {user.age}</p>
                        <p>Hair Color: {user.hairColor}</p>
                    </div>
                ))
            }
        </div>
)}

export default Person;