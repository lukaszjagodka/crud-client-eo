import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { setValueFromLogin } from '../../actions/user';
import { sendUserLogin } from '../../actions/fetchPost'

const Login = (props) =>{
    const handleSend = (e) => {
        props.setValueFromLogin(e.target.name, e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const { emailLogin, passwordLogin } = props;
        const data = {emailLogin, passwordLogin}
        let splitEmail = emailLogin.split("@");
        localStorage.setItem('email', splitEmail[0])
        props.sendUserLogin(`http://localhost:3001/users/login`, data)
    }
    const token = localStorage.getItem('jwt');
    return (
        !token ? 
        <div className="container">
            <div className="center"><h3>Login</h3></div>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div className="input-field col s12">
                    <input id="email" name="emailLogin" type="email" class="validate" onChange={(e)=> handleSend(e)} placeholder="Email"/>
                </div>
                <div className="input-field col s12">
                    <input id="password" name="passwordLogin" /*type="password"*/ class="validate" onChange={(e)=> handleSend(e)} placeholder="Password"/>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
            </form>
        </div>
        : <Redirect to='/'/>
    )
}

const mapDispatchToProps = (dispatch) => ({
    sendUserLogin: (url, data) => dispatch(sendUserLogin(url, data)),
    setValueFromLogin: (name, value) => dispatch(setValueFromLogin(name, value)),
});

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated,
    token: state.user.token,
    emailLogin: state.user.emailLogin,
    passwordLogin: state.user.passwordLogin,
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)