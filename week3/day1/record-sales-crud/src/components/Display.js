import React, {useState} from 'react';

const Display = (props) => {

    const {recordList, setRecordList, record, id, recordsSold} = props
    const [recordSales, setRecordSales] = useState(recordsSold)

    const deleteRecord = (id) => {
        setRecordList(() => recordList.filter(record => record.id !== id))
    }

    const increaseSales = () => {
        setRecordSales(originalSalesAmount => originalSalesAmount+1)
    }

    return (
        <div>
            <div className='border border-dark w-50 mx-auto mt-5'>
                {/* <p>Id: {record.id}</p> */}
                <p>Artist: {record.artist}</p>
                <p>Album name: {record.albumName}</p>
                <p>Release Year: {record.releaseYear}</p>
                <p>Records Sold: {recordSales}</p>
                <button className='w-25 btn btn-success' onClick={increaseSales}>Buy Record</button>
                <button className='w-25 btn btn-danger' onClick={() => deleteRecord(id)}>Delete Record</button>
            </div>
        </div>
)}

export default Display;