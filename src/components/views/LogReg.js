import React from 'react';
import Login from '../users/Login'
import Registraion from './Registration';

const LogReg = () =>{
    return (
        <div className="container">
            <div className="menu center" style={{float:"left", 'padding-left':'25%'}}>
                <Login/>
            </div>
            <div className="menu" style={{float:"right", 'padding-right':'25%'}}>
                <Registraion/>
            </div>
        </div>
    )
}

export default LogReg