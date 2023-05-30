import React, {useState} from 'react';
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
const DeleteAlbum = (props) => {
    const navigate = useNavigate()
    const {allAlbums,setAllAlbums,id} = props
    const removeFromDom = (id) => {
        const updatedAlbumList = allAlbums.filter((album) => album._id !== id)
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
            <button className='btn btn-danger' onClick={deleteAlbum}>Delete Album</button>
        </div>
)}

export default DeleteAlbum;