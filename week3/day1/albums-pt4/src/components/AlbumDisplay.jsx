import React, {useState} from 'react';
import './AlbumDisplay.css'

const AlbumDisplay = (props) => {
    const {albumList, setAlbumList} = props

    const deleteHandler = (id) => {
        let newList = albumList.filter((album) => album.id!==id)
        console.log(newList)
        setAlbumList(newList)
    }
    return (
        <div className='album-container'>
            {
                albumList.map((album) => (
                    <div key={album.id} className='album'>
                        <p>Album Name: {album.albumName}</p>
                        <p>Band Name: {album.bandName}</p>
                        <p>Release Year: {album.releaseYear}</p>
                        <p>Records Sold: {album.recordsSold}</p>
                        <button>Buy Record</button>
                        <button onClick={() => deleteHandler(album.id)} className='delete-button'>Delete Record</button>
                        <button>Buy Record</button>
                    </div>
                ))
            }
        </div>
)}

export default AlbumDisplay;