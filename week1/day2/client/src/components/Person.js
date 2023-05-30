import React, {useState} from 'react'

const Person = (props) => {

    const {fullName,age, hairColor} = props
    const [currentAge, setCurrentAge] = useState(age)

    // const handleClick = () =>{
    //     setCurrentAge(currentAge+1)
    // }

    return (
        <div>
            <h1>{fullName}</h1>
            <p>Age {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={() => setCurrentAge(prevCount => prevCount +1)}>Birthday Button</button>
        </div>
    )
}
export default Person