import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
const AlbumForm = (props) => {
    const navigate = useNavigate()
    const {setAllAlbums} = props
    const [album, setAlbum] = useState({
        albumName:'',
        artist:'',
        releaseYear: 1900,
        genre:'Rock',
        explicit:false
    })
    // ! Start todays lecture with displaying errors
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        if(e.target.name === 'explicit'){
            setAlbum(prevState => ({...prevState, explicit: !prevState.explicit}))
        }
        else{
            setAlbum(prevState => ({...prevState, [e.target.name]: e.target.value}))
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/postAlbum', album)
            .then((res) => {
                console.log(res)
                setAllAlbums(prevState => [...prevState, res.data])
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }
    return (
        <div className='w-100 d-flex justify-content-center'>
            <form className='w-25' onSubmit={submitHandler} >
                <h2>Add to the collection! </h2>
                <label className='form-label'>Album Name:</label>
                <input type="text" name="albumName" className='form-control' onChange={changeHandler} value={album.albumName}/>
                {
                    errors.albumName?
                    <p>{errors.albumName.message}</p>:
                    null
                }
                <label className='form-label'>Artist:</label>
                <input type="text" name="artist" className='form-control' onChange={changeHandler} value={album.artist}/>
                {
                    errors.artist?
                    <p>{errors.artist.message}</p>:
                    null
                }
                <label className='form-label'>Release Year:</label>
                <input type="number" name="releaseYear" className='form-control' onChange={changeHandler} value={album.releaseYear}/>
                {
                    errors.releaseYear?
                    <p>{errors.releaseYear.message}</p>:
                    null
                }
                <label className='form-label'>Genre:</label>
                <select className="form-select" name="genre" onChange={changeHandler} value={album.genre}>
                    <option value="Rock">Rock</option>
                    <option value="Alternative">Alternative</option>
                    <option value="Hip-hop/rap">Hip-hop/rap</option>
                    <option value="Pop">Pop</option>
                    <option value="Classical">Classical</option>
                    <option value="Metal">Metal</option>
                    <option value="Blues">Blues</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Country">Country</option>
                    <option value="R&B/Soul">R&B/Soul</option>
                </select>
                {
                    errors.genre?
                    <p>{errors.genre.message}</p>:
                    null
                }
                <p className='form-check-label'>Explicit?</p>
                <input className='form-check-input' type="checkbox" name="explicit" onChange={changeHandler}/>
                <label className='form-check-label'>Yes</label>
                <br />
                {
                    errors.explicit?
                    <p>{errors.explicit.message}</p>:
                    null
                }
                <button className='btn btn-primary'>Post</button>
            </form>
        </div>
)}

export default AlbumForm;