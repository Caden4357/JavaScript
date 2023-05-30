import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom';
import { userContext } from '../context/UserContext';
const Profile = (props) => {
    const navigate = useNavigate()
    const {loggedInUser, setLoggedInUser} = useContext(userContext)
    const [usersAlbums, setUsersAlbums] = useState([])
    // console.log('local Storage from profile ', window.localStorage.getItem('uuid'));
    const uuid = window.localStorage.getItem('uuid')

    useEffect(() => {
        axios.get(`http://localhost:8000/api/loggedInUser/${uuid}`, {withCredentials:true})
        .then((res) => {
            console.log(res);
            // console.log(allAlbums.data);
            setLoggedInUser(res.data)
        })
        .catch((err) => {
            console.log(err);
            setUsersAlbums([])
            navigate('/')
        })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:8000/api/albumsByLoggedInUser', {withCredentials:true})
            .then((allAlbums) => {
                console.log(allAlbums);
                // console.log(allAlbums.data);
                setUsersAlbums(allAlbums.data)
            })
            .catch((err) => {
                console.log(err);
                setUsersAlbums([])
                navigate('/')
            })
    }, [])

    const removeFromDom = (id) => {
        setUsersAlbums(usersAlbums.filter((album) => album._id !== id))
    }

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteAlbum/${id}`)
            .then((res) => {
                removeFromDom(id)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    return (
        <div>
            <h2>Welcome back! {loggedInUser.firstName}</h2>
            <div className='d-flex flex-wrap justify-content-around'>
            {
                usersAlbums.map((album) => (
                    <div className='p-3 m-3 w-25 album' key={album._id}>
                        <p>Album Name: {album.albumName}</p>
                        <p>Artist: {album.artist}</p>
                        <p>Release Year: {album.releaseYear}</p>
                        {
                            album.explicit?
                            <p>Explicit: <span className='text-danger'>&#127348;</span></p>:
                            <p>Clean ✔️</p>
                        }
                    <Link to={`/editAlbum/${album._id}`} className='me-3 btn border'>Edit</Link>
                    <Link to={`/oneAlbum/${album._id}`} className='btn border'>Details</Link>
                    <button onClick={() => deleteHandler(album._id)} className='btn btn-danger ms-3'>Delete Album</button>
                    </div>
                ))   
            }
            </div>
        </div>
)}

export default Profile;