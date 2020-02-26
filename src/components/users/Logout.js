import React, {Component} from 'react';
import  { Redirect } from 'react-router-dom'

class Logout extends Component{
    componentDidUpdate(){
        const token = localStorage.getItem('jwt');
        if(!token){
            return <Redirect to='/login'/>
        }
    }
    render() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('email');
        window.location.reload();
        return (
            <div>
                
            </div>
        )
    }
}

export default Logout