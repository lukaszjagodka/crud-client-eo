import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addUserFromLogin, addEmailFromLogin, addPasswordFromLogin } from '../../actions/user';
// import { sendUserLogin } from './../../helpers/helperPost'
import { sendUserLogin } from './../../actions/fetchPost'
const Login = (props) =>{
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // props.addEmailFromLogin(email)
        // props.addPasswordFromLogin(password)
        const data = {email, password}
        // sendUserLogin(data);
        props.sendUserLogin(`http://localhost:3001/users/login`, data)
    }
    return (
        <div className="container">
            {props.emailFromLogin}
            {props.passFromLogin}
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div className="input-field col s12">
                    <input id="email" /*type="email" class="validate"*/ onChange={(e)=> handleEmail(e)} placeholder="Email"/>
                </div>
                <div className="input-field col s12">
                    <input id="password" /*type="password" class="validate"*/ onChange={(e)=> handlePassword(e)} placeholder="Password"/>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addUserFromLogin: (value) => dispatch(addUserFromLogin(value)),
    addEmailFromLogin: (value) => dispatch(addEmailFromLogin(value)),
    addPasswordFromLogin: (value) => dispatch(addPasswordFromLogin(value)),
    sendUserLogin: (url, data) => dispatch(sendUserLogin(url, data))
});

const mapStateToProps = (state) => ({
    emailFromLogin: state.user.email,
    passFromLogin: state.user.password
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)