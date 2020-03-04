import React from 'react';
import {connect} from 'react-redux';

import './../../css/style.css'

const Navbar = () => {
    const token = localStorage.getItem('jwt');
    const user = localStorage.getItem('name');
    return(
        token ? 
        <nav style={{'backgroundColor': '#7c0e13'}}>
            <div className="nav-wrapper container" >
                <ul id="nav-mobile">
                    <li><a href="/">Home</a></li>
                    <li><a href="/testpage">Test</a></li>
                    <div className="right">
                        <li><a href="/profile" style={{color: '#3399ff', fontWeight: 'bold'}}>{user}</a></li>
                        <li><a href="/logout">Logout</a></li>
                    </div>
                </ul>
            </div>
        </nav> :
        <nav>
            <div className="nav-wrapper" style={{ 'paddingLeft': '45%','backgroundColor': '#7c0e13'}}>
                <h2>LogIn</h2>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) =>  ({
})

export default connect(mapStateToProps, null)(Navbar)