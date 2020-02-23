import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <div className="nav-wrapper" style={{padding: '20px'}}>
                <Link to="/">Home</Link>
                <Link to="/testpage">TestPage</Link>
                <Link to="/account">Profile</Link>
                <Link to="/logout">Logout</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    )
}

export default Navbar