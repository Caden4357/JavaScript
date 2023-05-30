import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'
const OneAlbum = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [album, setAlbum] = useState({})
    const [comment, setComment] = useState('')
    const [allComments, setAllComments] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneAlbum/${id}`)
            .then((res) => {
                console.log(res.data);
                setAlbum(res.data.oneAlbum)
                setAllComments(res.data.commentsForAlbum)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const postComment = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/postComment/${id}`, {comment}, {withCredentials:true})
        .then((res) => {
            console.log(res);
            setComment('')
            setAllComments([...allComments, res.data])
        })
        .catch((err) => {
            console.log(err);
        })
    }
    const removeFromDom = (id) => {
        setAllComments(allComments.filter((comment) => comment._id !== id))
    }
    const deleteComment = (id) => {
        axios.delete(`http://localhost:8000/api/deleteComment/${id}`)
            .then((res) => {
                removeFromDom(id)
            })
            .catch((err) => {
                console.log(err);
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
            <h3>Comment on this album</h3>
            <form className='mb-5' onSubmit={postComment}>
                <label>Comment:</label>
                <input type="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
            </form>
            <h2>Comments:</h2>
            {
                allComments.length>0?
                allComments.map((comment) => (
                    <div className='mb-4'>   
                        <h3>{comment.username} says: {comment.comment}</h3>
                        {
                            comment.user_id === window.localStorage.getItem('uuid')?
                            <button onClick={() => deleteComment(comment._id)} className='btn btn-danger'>Delete</button>:
                            null
                        }
                    </div>
                )):
                null
            }
        </div>
)}

export default OneAlbum;