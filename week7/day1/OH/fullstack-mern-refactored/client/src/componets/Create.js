import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AlbumForm from './AlbumForm';
const Create = (props) => {
    const navigate = useNavigate()
    const {allAlbums, setAllAlbums} = props
    const [errors, setErrors] = useState({})
    const [album, setAlbum] = useState({
        albumName:'',
        artist:'',
        releaseYear: 1900,
        genre:'Rock',
        explicit:false
    })
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
        <AlbumForm 
        album={album}
        setAlbum={setAlbum}
        submitHandler={submitHandler} 
        errors={errors} 
        setErrors={setErrors}/>
)}

export default Create;