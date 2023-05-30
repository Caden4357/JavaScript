import React, {useState} from 'react';

const ChangeColor = (props) => {

    const [header, setHeader] = useState("Hello Aliens! 👽")
    const [input, setInput] = useState("")

    // ? Extra ask questions about these
    // const [state, setState] = useState({
    //     items: [],
    //     totalPrice: 0.00
    // });
    // const setPrice = () => {

    //     setState({ items: state.items, totalPrice: state.totalPrice = 11.99 });
    //     console.log(state.totalPrice);
    // }
    // const [arr, setArr] = useState([]);
    // const array = () => {
    //     for(let i=1; i>=5; i++) {
    //         setArr([...arr, i]);
    //         console.log(i)
    //     }
    //     console.log(arr);

    // }

    // array();

    const changeHeader = () => {
        setHeader(input)
        // document.querySelector('h1').style.backgr1oundColor = input
    }

    return (
        <div>
            <h1>{header}</h1>
            {/* <h2>Array: {arr}</h2> */}
            <label htmlFor="header">Change the header!</label>
            <input type="text" name="header" id="header" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={changeHeader}>Change Header Text</button>
            {/* <button>log price</button> */}
        </div>
)}

export default ChangeColor;