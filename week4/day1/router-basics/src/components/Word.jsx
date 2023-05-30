import React, {useState} from 'react';
import {useParams} from 'react-router-dom'
const Word = (props) => {
    const {varString,number} = useParams()
    console.log(number)
    
    return (
        <div>
            <h2 style={{color:varString}}>The Number {number}</h2>
            <h2 style={{color:varString}}>The word that you typed in the url is... {varString}</h2>
        </div>
)}

export default Word;