import React, {useState} from 'react';
import DisplayBoxes from './DisplayBoxes';

const Box = (props) => {


    const [color, setColor] = useState("#000000");

    const [box, setBox] = useState({
        color:"#000000",
        dimensions: "50px"
    })

    // const [boxes, setBoxes] = useState([])
    const [boxColor, setBoxColor] = useState([{}]);

    const changeHandler = (e) => {
        setBox({...box, [e.target.name]:e.target.value})
        // console.log(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setBoxColor([...boxColor, {color:box.color,dimensions:box.dimensions}])
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="color">Color</label>
                <input type="color" name="color" id="color" onChange={changeHandler}/>
                {/* <input type="text" name="color" id="color" onChange={changeHandler}/> */}

                <label htmlFor="dimensions">Dimensions</label>
                <input type="number" name="dimensions" id="color" onChange={changeHandler}/>
                <button>Add</button>
            </form>
            <DisplayBoxes colorList={boxColor}/>
        </div>
)}

export default Box;