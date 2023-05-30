import React, {useState} from 'react';
import {Link} from 'react-router-dom'
const Nav = (props) => {
    return (
        <div className='d-flex justify-content-around align-items-center mb-5'>
            <h1>Records Dot Com</h1>
            <Link to={'/newAlbum'}>Post A New Album</Link>
            <Link to={'/'}>Home</Link>
            <span>Link3</span>
            <span>Link4</span>
        </div>
)}

export default Nav;