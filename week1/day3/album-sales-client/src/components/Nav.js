import React from 'react';
import "./nav.css"
const Nav = (props) => {
    const {name} = props 
    return (
        <nav className="flex jc-between nav">
            <h1>Welcome {name} You're on the web's best site for tracking album sales</h1>
            <div className="nav-links flex ai-center jc-between w-25">
                <a href="#">Link</a>
                <a href="#">Link2</a>
                <a href="#">Link3</a>
                <a href="#">Link4</a>
            </div>
        </nav>
    )
}
export default Nav;