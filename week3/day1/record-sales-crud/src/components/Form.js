import React, {useState} from 'react';


const Form = (props) => {

    const [record, setRecord] = useState({
        id: undefined,
        albumName: "",
        artist: "",
        releaseYear: 1900,
        recordsSold: 0
    })

    const [errors, setErrors] = useState([])
    const {recordList, setRecordList} = props
    
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

    const changeHandler = (e) => {
        setRecord({...record, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        
        // ! needs work
        if (!runValidations()){
            // console.log("here");
            return errors
        }
        else{
            let newRecord = {...record, id:crypto.randomUUID()}
            // console.log(`New record object ${JSON.stringify(record)}`);
            setRecordList(oldList => [...oldList, newRecord])
            setRecord({
                id: undefined,
                albumName: "",
                artist: "",
                releaseYear: 1900,
                recordsSold: 0
            })
            setErrors([''])
        }
    }

    return (
        <div>
            <h1>
                Add Records!
            </h1>
            {
                errors.map((err, idx) => (
                    <p key={idx}>{err}</p>
                ))
            }
            <form className='form w-25 mx-auto' onSubmit={submitHandler}>
                <label htmlFor="albumName">Album Name:</label>
                <input className='form-control' value={record.albumName} type="text" name="albumName" id="albumName" onChange={changeHandler} />

                <label htmlFor="artist">Artist:</label>
                <input className='form-control' value={record.artist} type="text" name="artist" id="artist" onChange={changeHandler}/>

                <label htmlFor="releaseYear">Year Of Release:</label>
                <input className='form-control' value={record.releaseYear} type="number" name="releaseYear" id="releaseYear" onChange={changeHandler}/>

                <label htmlFor="recordsSold">Records Sold:</label>
                <input className='form-control' value={record.recordsSold} type="number" name="recordsSold" id="recordsSold" onChange={changeHandler}/>
                <button className='w-100 btn btn-success'>Add</button>
            </form>
        </div>
)}

export default Form;