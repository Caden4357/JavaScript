import React, {useState} from 'react';

const Album = (props) => {
    const {name, artist, yearOfRelease, albumSales } = props;
    const [recordsSold, setRecordsSold] = useState(albumSales)

    const increaseSales = () => {
        setRecordsSold(prevCount => prevCount + 1)
    }

    return (
        <div className='border text-center p-2'>
            <h2>Artist: {artist}</h2>
            <h2>Album: {name}</h2>
            <h3>Release Year: {yearOfRelease}</h3>
            <h4>Records Sold: {recordsSold}</h4>
            <button onClick={increaseSales}>Buy This Record</button>
        </div>
)}

export default Album;


// ? Come back to this later
    // const increaseSales = (albumSales) => {
    //     console.log(recordsSold);
    //     const [recordsSold, setRecordsSold] = useState(albumSales)
    // }

        {/* // </div>
                // <div className='m-2 flex jc-between'>
        //     {
        //         albums.map((al, idx) => (
        //             <div className='border text-center p-2'>
        //                 <h2>Artist: {al.artist}</h2>
        //                 <h2>Album: {al.name}</h2>
        //                 <h3>Release Year: {al.yearOfRelease}</h3>
        //                 <h4>Records Sold: {al.albumSales}</h4>
        //                 <button>Buy This Record</button>
        //             </div>
        //         ))
        //     }
        // </div> */}