import React from 'react'
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom'
import { authorizeUser } from '../actions/user'

import decode from 'jwt-decode';

export default function(ComposedComponent){
    class Authenticator extends React.Component{
        componentDidMount(){
            const token = localStorage.getItem('jwt');
            // console.log(token)
            // console.log((this.props.isAuthenticated))
            if(!token){
                return <Redirect to='Login'/>
                // return console.log('brak tokenu')
            }
            const decToken = decode(token)
            console.log(decToken)
            
            // try{
            //     const {exp} = decode(token)
            //     console.log(exp)
            //     if( exp < new Date().getTime()/1000){
            //         return <Redirect to='/login'/>
            //     }
            // }catch(e){
            //     return <Redirect to='/login'/>
            // }
            // this.props.authorizeUser(true)
            
            // return true;

            // if(!this.props.isAuthenticated || this.props.isAuthenticated == null){
            //     console.log('Error')
            // }
            // this.context.router.push('/login')
        }
        // componentDidUpdate(){
        //     console.log(this.props, 'CDU')
        // }

        render(){
            const token = localStorage.getItem('jwt');
            console.log(this.props.isAuthenticated)
            return (
                !token ? 
                <Redirect to='/login'/> :
                <ComposedComponent {...this.props}/>
            )
        }
    }
    // Authenticate.propTypes = {
    //     isAuthenticated: React.propTpyes.bool.isRequired
    // }

    const mapDispatchToProps = (dispatch) => ({
        authorizeUser: (value) => authorizeUser(dispatch(value))
    })

    const mapStateToProps = (state) => ({
        isAuthenticated: state.user.isAuthenticated
    })

    return connect(mapStateToProps, mapDispatchToProps)(Authenticator);
}