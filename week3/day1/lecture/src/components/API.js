import React, {useState, useEffect} from 'react';
import axios from 'axios'
const API = (props) => {
    const [starWarsCharacters, setStarWarsCharacters] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
            .then((response) => {
                console.log(response);
                setStarWarsCharacters(response.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
        // fetch('https://swapi.dev/api/people/')
        // .then(response => response.json())
        // .then(response => console.log(response))
    }, [])


    return (
        <div>
            
        </div>
)}

export default API;