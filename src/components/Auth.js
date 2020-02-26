import React from 'react'
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom'
import { authorizeUser } from '../actions/user'

import decode from 'jwt-decode';

export default function(ComposedComponent){
    class Authenticator extends React.Component{
        componentDidMount(){
            const token = localStorage.getItem('jwt');
            if(token){
                return <Redirect to='/'/>
            }else{
                return <Redirect to='Login'/>
            }
        }

        render(){
            const token = localStorage.getItem('jwt');
            // try{
            //     const {name} = decode(token)
            //     console.log(name)
            // }catch(e){
            //     console.log(e)
            // }
            try{
                const {exp, name} = decode(token)
                if( exp < new Date().getTime()/1000){
                    return <Redirect to='/login'/>
                }
                console.log(name)
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
        authorizeUser: (value) => dispatch(authorizeUser(value))
    })

    const mapStateToProps = (state) => ({
        isAuthenticated: state.user.isAuthenticated
    })

    return connect(mapStateToProps, mapDispatchToProps)(Authenticator);
}