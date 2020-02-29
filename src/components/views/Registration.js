import React from 'react'
import { connect } from 'react-redux';
import { sendUserLogin } from '../../actions/fetchPost';
import { setValue } from './../../actions/user'

const Registraion = (props) => {
    const handleSend = (e) => {
        props.setValue(e.target.name, e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = props;
        const data = { name, email, password}
        props.sendUserLogin(`http://localhost:3001/users/register`, data)
    }
    return (
        <div className="container center">
            <div className="center"><h3>Register</h3></div>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div className="input-field col s12">
                    <input id="name" name="name" onChange={(e)=> handleSend(e)} placeholder="Name"/>
                </div>
                <div className="input-field col s12">
                    <input id="email" name="email" type="email" class="validate" onChange={(e)=> handleSend(e)} placeholder="Email"/>
                </div>
                <div className="input-field col s12">
                    <input id="password" name="password" /*type="password"*/ class="validate" onChange={(e)=> handleSend(e)} placeholder="Password"/>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    sendUserLogin: (url, data) => dispatch(sendUserLogin(url, data)),
    setValue: (name, value) => dispatch(setValue(name, value)),
});

const mapStateToProps = (state) => ({
    name: state.user.name,
    email: state.user.email,
    password: state.user.password
})

export default connect(mapStateToProps, mapDispatchToProps)(Registraion)