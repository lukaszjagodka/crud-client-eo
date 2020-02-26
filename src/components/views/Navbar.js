import React from 'react';
import {connect} from 'react-redux';

const Navbar = () => {
    const token = localStorage.getItem('jwt');
    return(
        token ? 
        <nav>
            <div className="nav-wrapper" style={{padding: '20px'}}>
                <ul id="nav-mobile">
                    <li><a href="/">Home</a></li>
                    <li><a href="/testpage">Test</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </div>
        </nav> :
        <nav>
        <div className="nav-wrapper" style={{padding: '20px'}}>
            
            <ul id="nav-mobile">
            <h1>LogIn</h1>
            </ul>
        </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    
}

export default connect(mapStateToProps, null)(Navbar)