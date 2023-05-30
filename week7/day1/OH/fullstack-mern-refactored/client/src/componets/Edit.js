import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AlbumForm from './AlbumForm';

const Edit = (props) => {
    const [errors, setErrors] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    const [album, setAlbum] = useState({
        albumName:'',
        artist:'',
        releaseYear: 1900,
        genre:'',
        explicit:false,
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneAlbum/${id}`)
            .then((oneAlbum) => {
                console.log(oneAlbum);
                setAlbum(oneAlbum.data)
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateAlbum/${id}`, album)
            .then((res) => {
                console.log(res)
                // setAllAlbums(prevState => [...prevState, res.data])
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }
    return (
        <AlbumForm 
        submitHandler={submitHandler} 
        errors={errors} 
        setErrors={setErrors} 
        album={album} 
        setAlbum={setAlbum}/>
    )
}

export default Edit;