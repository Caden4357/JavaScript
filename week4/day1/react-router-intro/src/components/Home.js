import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom'

const Home = (props) => {
    const number = useParams()
    console.log(number.number);
    return (
        <div>
            <Link to={'/'}>Back to login</Link>
            <br />
            <Link to={'/newAlbum'}>New Album</Link>
            <h2 className='text-success'>Home Component</h2>
        </div>
)}

export default Home;