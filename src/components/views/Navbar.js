import React from 'react';
import {connect} from 'react-redux';

const Navbar = () => {
    const token = localStorage.getItem('jwt');
    const user = localStorage.getItem('email');
    return(
        token ? 
        <nav>
            <div className="nav-wrapper container" style={{}}>
                <ul id="nav-mobile">
                    <li><a href="/">Home</a></li>
                    <li><a href="/testpage">Test</a></li>
                    <div className="right">
                        <li><a href="/profile" style={{color: 'blue', /*fontWeight: 'bold'*/}}>{user}</a></li>
                        <li><a href="/logout">Logout</a></li>
                    </div>
                </ul>
            </div>
        </nav> :
        <nav>
        <div className="container">
            <div className="nav-wrapper" style={{'padding-left': '45%'}}>
                <h2>LogIn</h2>
            </div>
        </div>
        </nav>
    )
}

const mapStateToProps = (state) =>  ({
})

export default connect(mapStateToProps, null)(Navbar)