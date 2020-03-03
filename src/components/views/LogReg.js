import React from 'react';
import Login from '../users/Login'
import Registration from './Registration';

import './../../css/style.css'

const LogReg = () =>{
    return (
        <div className="container" style={{'backgroundColor': '#181a1b'}}>
            <div className="menu center" style={{float:"left", 'paddingLeft':'25%', /*'backgroundColor': '#181a1b'*/}}>
                <Login/>
                <br/>
                <div>l@g.com</div>
                <div>qwerty</div>
                <br/>
                <div>k@p.com</div>
                <div>testtest</div>
            </div>
            <div className="menu center" style={{float:"right", 'paddingRight':'25%', /*'backgroundColor': '#181a1b'*/}}>
                <Registration/>
            </div>
        </div>
    )
}

export default LogReg