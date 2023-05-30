import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
const ShowOneAlbum = (props) => {
    const navigate = useNavigate()
    const {allAlbums, setAllAlbums} = props
    const {id} = useParams()
    const [album, setAlbum] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneAlbum/${id}`)
            .then((res) => {
                console.log(res.data);
                setAlbum(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    const removeFromDom = (id) => {
        const updatedAlbumList = allAlbums.map((album) => album._id !== id)
        setAllAlbums(updatedAlbumList)
    }
    const deleteAlbum = () => {
        axios.delete(`http://localhost:8000/api/deleteAlbum/${id}`)
            .then((res) => {
                removeFromDom(id)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <h2>{album.albumName}</h2>
            <h3>By: {album.artist}</h3>
            <p>Released in: {album.releaseYear}</p>
            <p>Genre: {album.genre}</p>
            {
                album.explicit?
                <p>Explicit: <span className='text-danger'>&#127348;</span></p>:
                <p>Clean ✔️</p>
            }
            <button className='btn btn-danger' onClick={deleteAlbum}>Delete Album</button>
        </div>
)}

export default ShowOneAlbum;