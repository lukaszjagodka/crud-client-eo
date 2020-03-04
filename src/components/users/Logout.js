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
        localStorage.clear();
        window.location.reload();
        return (
            <div>
                
            </div>
        )
    }
}

export default Logout