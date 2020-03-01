import React from 'react';
import Login from '../users/Login'
import Registration from './Registration';

const LogReg = () =>{
    return (
        <div className="container">
            <div className="menu center" style={{float:"left", 'paddingLeft':'25%'}}>
                <Login/>
                <br/>
                <div>l@g.com</div>
                <div>qwerty</div>
                <br/>
                <div>k@p.com</div>
                <div>testtest</div>
            </div>
            <div className="menu" style={{float:"right", 'paddingRight':'25%'}}>
                <Registration/>
            </div>
        </div>
    )
}

export default LogReg