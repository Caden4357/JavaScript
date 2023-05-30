import {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
const AllAlbums = (props) => {
    const {allAlbums, setAllAlbums} = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/allAlbums')
            .then((albums) => {
                console.log(albums);
                setAllAlbums(albums.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    
    return (
        <div>
            <h2 className='mb-5'>Check Out Our Collection</h2>
            <div className='d-flex flex-wrap justify-content-around'>
            {
                allAlbums.length > 0? 
                allAlbums.map((album) => (
                    <div key={album._id} className='border border-dark p-4'>
                        <p>Album Name: {album.albumName}</p>
                        <p>Artist: {album.artist}</p>
                        <p>Release Year: {album.releaseYear}</p>
                        {
                            album.explicit?
                            <p>Explicit: <span className='text-danger'>&#127348;</span></p>:
                            <p>Clean ✔️</p>
                        }
                    <Link to={`/editAlbum/${album._id}`} className='me-3'>Edit</Link>
                    <Link to={`/oneAlbum/${album._id}`}>Details</Link>
                    </div>
                )):
                <p>Loading...</p>
            }
            </div>
        </div>
    )
}

export default AllAlbums;