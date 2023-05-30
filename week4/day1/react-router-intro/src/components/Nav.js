import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <h1>Aliens Only 👾</h1>
            <span>Link1 |</span>
            <Link className='text-dark' to={'/'}> Back to login | </Link>
            <Link className='text-dark' to={'/newAlbum'}> New Album | </Link>
            <Link className='text-dark' to={'/dashboard'}> Home | </Link>
        </div>
)}

export default Nav;