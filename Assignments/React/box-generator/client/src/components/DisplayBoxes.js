import React, {useState} from 'react';

const DisplayBoxes = (props) => {
    const {colorList} = props
    // console.log(colorList);
    const boxParent = {
        width: "75%",
        margin:"0px auto",
        display: "flex",
        flexWrap:"wrap"
    }

    return (
        <div style={boxParent}>
        {
            colorList.map((box, idx) => (
                <div style={{
                    background:box.color,
                    width: box.dimensions+"px",
                    height: box.dimensions+"px",
                    margin: "5px"
                }}>

                </div>
            ))
        }
    </div>
)}

export default DisplayBoxes;