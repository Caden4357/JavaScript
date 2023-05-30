import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import DeleteAlbum from './DeleteAlbum';
const ShowOneAlbum = (props) => {
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
            <DeleteAlbum id={album._id} allAlbums = {allAlbums} setAllAlbums={setAllAlbums}/>
        </div>
)}

export default ShowOneAlbum;