import React, {useState} from 'react';

const Form = (props) => {

    const [record, setRecord] = useState({
        id: 0,
        albumName: "",
        artist: "",
        releaseYear: 1900,
        recordsSold: 0
    })
    const [recordList, setRecordList] = useState([])
    const [errors, setErrors] = useState([])

    const changeHandler = (e) => {
        setRecord({...record, [e.target.name]: e.target.value})
    }

    // ! needs work
    const runValidations = () => {
        let isValid = true 
        if (record.albumName.length < 3){
            setErrors(oldArr => [...oldArr, "Album name must be 3 or more characters"])
            isValid = false
        }
        if (record.artist.length < 3){
            setErrors(oldArr => [...oldArr, "Artist name must be 3 or more characters"])
            isValid = false
        }
        if (record.releaseYear < 1900){
            setErrors(oldArr => [...oldArr, "Release year cannot be before 1900"])
            isValid = false
        }
        if (record.recordsSold < 0){
            setErrors(oldArr => [...oldArr, "Cannot have negative records sold"])
            isValid = false
        }
        return isValid
    }
    const submitHandler = (e) => {
        e.preventDefault();
        
        // ! needs work
        if (!runValidations()){
            console.log("here");
            return errors
        }
        else{
            let newRecord = {...record, id:crypto.randomUUID()}
            console.log(`New record object ${JSON.stringify(record)}`);
            setRecordList(oldList => [...oldList, newRecord])
            setRecord({
                albumName: "",
                artist: "",
                releaseYear: 1900,
                recordsSold: 0
            })
        }
    }


    return (
        <div>
            {
                errors.map((err, idx) => (
                    <p key={idx}>{err}</p>
                ))
            }
            <form onSubmit={submitHandler}>
                <label htmlFor="albumName">Album Name:</label>
                <input value={record.albumName} type="text" name="albumName" id="albumName" onChange={changeHandler} />

                <label htmlFor="artist">Artist:</label>
                <input value={record.artist} type="text" name="artist" id="artist" onChange={changeHandler}/>

                <label htmlFor="releaseYear">Year Of Release:</label>
                <input value={record.releaseYear} type="number" name="releaseYear" id="releaseYear" onChange={changeHandler}/>

                <label htmlFor="recordsSold">Records Sold:</label>
                <input value={record.recordsSold} type="number" name="recordsSold" id="recordsSold" onChange={changeHandler}/>
                <button>Add</button>
            </form>
            {
                recordList.map((record, id) => (
                    <div key={id}>
                        <p>Id: {record.id}</p>
                        <p>Artist: {record.artist}</p>
                        <p>Album name: {record.albumName}</p>
                        <p>Release Year: {record.releaseYear}</p>
                        <p>Records Sold: {record.recordsSold}</p>
                    </div>
                    
                ))
            }
        </div>
)}

export default Form;