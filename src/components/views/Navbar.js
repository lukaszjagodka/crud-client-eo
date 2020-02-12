import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Logo</a>
                <Link to="/" >Home</Link>
                <Link to="/logout" >Logout</Link>
            </div>
        </nav>
    )
}

export default Navbar