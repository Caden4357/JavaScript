import React, {useState, useContext} from 'react';
import { countContext } from '../context/CountContext';

const Count = (props) => {

    const {count, setCount} = useContext(countContext)

    const increaseCountOne = () => {
        // setState({...state, count:state.count+1})
        setCount((prevState) => {
            return {...prevState, count:prevState.count+1}
        })
    }

    const increaseCountTwo = () => {
        // setState({...state, count:state.count+1})
        setCount((prevState) => {
            return {...prevState, count:prevState.count+2}
        })
    }
    return (
        <div>
            <span>Click button to increase count by 1: </span>
            <button onClick={increaseCountOne}>{count.count}</button>
            <br />
            <span>Click button to increase count by 2: </span>
            <button onClick={increaseCountTwo}>{count.count}</button>
        </div>
)}

export default Count;