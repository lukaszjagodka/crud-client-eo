import React from 'react';

const Navbar = () => {
    return(
        <nav>
            <div className="nav-wrapper" style={{padding: '20px'}}>
                <ul id="nav-mobile">
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/testpage"> Test </Link></li> */}
                    {/* <Link to="/account">Profile</Link> */}
                    {/* <li><Link to="/logout">Logout </Link></li>
                    <li><Link to="/login">Login</Link></li> */}
                    <li><a href="/">Home</a></li>
                    <li><a href="/testpage">Test</a></li>
                    <li><a href="/logout">Logout</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar