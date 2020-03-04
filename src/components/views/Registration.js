import React, {Component} from 'react'
import { connect } from 'react-redux';
import { sendUserLogin } from '../../actions/fetchPost';
import { setValue } from './../../actions/user'

class Registration extends Component {
    handleChange = (e) => {
        this.props.setValue(e.target.name, e.target.value)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = this.props;
        const data = { name, email, password}
        this.props.sendUserLogin(`http://localhost:3001/users/register`, data)
    }
render(){
    return (
        <div className="container center">
            <div className="center"><h3>Register</h3></div>
            <form onSubmit={this.handleSubmit}>
                <div className="input-field col s12">
                    <input id="name" name="name" onChange={this.handleChange} placeholder="Name"/>
                </div>
                <div className="input-field col s12">
                    <input id="email" name="email" type="email" className="validate" onChange={this.handleChange} placeholder="Email"/>
                </div>
                <div className="input-field col s12">
                    <input id="password" name="password" type="password" className="validate" onChange={this.handleChange} placeholder="Password"/>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
            </form>
        </div>
    )
}
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

export default connect(mapStateToProps, mapDispatchToProps)(Registration)