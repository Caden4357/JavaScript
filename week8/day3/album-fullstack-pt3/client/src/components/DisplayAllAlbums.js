import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom';
import { userContext } from '../context/UserContext';
import './allAlbums.css'
const DisplayAllAlbums = (props) => {
    const {allAlbums, setAllAlbums} = props
    const {loggedInUser, setLoggedInUser} = useContext(userContext)
    const uuid = window.localStorage.getItem('uuid')

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/loggedInUser/${uuid}`, {withCredentials:true})
        .then((res) => {
            console.log(res);
            // console.log(allAlbums.data);
            setLoggedInUser(res.data)
        })
        .catch((err) => {
            console.log(err);
            // setUsersAlbums([])
            navigate('/')
        })
    }, [])
    useEffect(() => {
        axios.get('http://localhost:8000/api/allAlbums', {withCredentials:true})
            .then((allAlbums) => {
                console.log(allAlbums);
                // console.log(allAlbums.data);
                setAllAlbums(allAlbums.data)
            })
            .catch((err) => {
                console.log(err);
                setAllAlbums([])
                navigate('/')
            })
    }, [])

    return (
        <div className='p-4'>
            <h2>Welcome back {loggedInUser.firstName}</h2>
            <h2 className='mb-5'>Check Out Our Collection</h2>
            <div className='d-flex flex-wrap justify-content-around'>
            {
                allAlbums.map((album) => (
                    <div className='p-3 m-3 w-25 album' key={album._id}>
                        <p>Album Name: {album.albumName}</p>
                        <p>Artist: {album.artist}</p>
                        <p>Release Year: {album.releaseYear}</p>
                        {
                            album.explicit?
                            <p>Explicit: <span className='text-danger'>&#127348;</span></p>:
                            <p>Clean ✔️</p>
                        }
                    <Link to={`/oneAlbum/${album._id}`} className='btn border'>Details</Link>
                    </div>
                ))   
            }
            </div>
        </div>
    )
}

export default DisplayAllAlbums;