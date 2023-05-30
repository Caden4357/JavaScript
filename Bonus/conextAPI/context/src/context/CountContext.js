import {createContext, useState} from 'react'

export const countContext = createContext()


export const CountProvider = (props) => {
    const [count, setCount] = useState({count:0})
    const [loggedInUser, setLoggedInUser] = useState({
        username:'',
        email:''
    })

    return (
        
        // The provider is what you wrap around your components in app.js

        <countContext.Provider value={{
            count, 
            setCount,
            loggedInUser,
            setLoggedInUser
        }}>
            {props.children}
        </countContext.Provider>
    )
}