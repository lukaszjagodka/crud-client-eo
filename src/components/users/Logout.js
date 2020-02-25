import React, {Component} from 'react';
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom'

class Logout extends Component{
    componentDidUpdate(){
        const token = localStorage.getItem('jwt');
        if(!token){
            return <Redirect to='/login'/>
        }
    }
    render() {
        const token = localStorage.getItem('jwt');
        localStorage.removeItem('jwt');
        if(token){
            alert('you was logout')
        }
        return (
            <div>
                {}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
    token: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
// export default function Logout(){
//     const token = localStorage.getItem('jwt');
//     return console.log(token, 'o urwa dziala')
// }