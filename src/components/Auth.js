import React from 'react'
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom'
import { authorizeUser, setEmail } from '../actions/user'

import decode from 'jwt-decode';

export default function(ComposedComponent){
    class Authenticator extends React.Component{
        componentDidMount(){
            const token = localStorage.getItem('jwt');
            if(token){
                return <Redirect to='/'/>
            }else{
                return <Redirect to='/login'/>
            }
        }

        render(){
            const token = localStorage.getItem('jwt');
            try{
                const {exp, name, email} = decode(token)
                if( exp < new Date().getTime()/1000){
                    return <Redirect to='/login'/>
                }
                localStorage.setItem('name', name)
                this.props.setEmail(email)
            }catch(e){
                return <Redirect to='/login'/>
            }
            return (
                !token ? 
                <Redirect to='/login'/> :
                <ComposedComponent {...this.props}/>
            )
        }
    }

    const mapDispatchToProps = (dispatch) => ({
        authorizeUser: (value) => dispatch(authorizeUser(value)),
        setEmail: (value) => dispatch(setEmail(value)),
    })

    const mapStateToProps = (state) => ({
        isAuthenticated: state.user.isAuthenticated
    })

    return connect(mapStateToProps, mapDispatchToProps)(Authenticator);
}