import React, {Component} from 'react';
import { connect } from 'react-redux';
import { abstractTokenFetch } from '../../actions/abstractTokenFetch'

class DeleteAccount extends Component {
    state = {
        password: '',
        rePassword: '',
        actualPassword: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {password, rePassword, actualPassword} = this.state;
        const email = this.props.email;
        if(!actualPassword){
            alert('Enter actual password.')
        }else if((!password) || (!rePassword)){
            alert('Add new password.')
        }else if(password !== rePassword){
            alert('Passwords are not the same.')
            window.location.reload();
        }else if((password || rePassword) === actualPassword){
            alert('Choose a different password.')
        }else if((password === rePassword) && actualPassword){
            const data = {email: email, actualPassword: actualPassword, newPassword: password}
            abstractTokenFetch('http://localhost:3001/users/passwordchange', 'POST', data)
        }
    }
    render(){
        return(
            <div className="container center" style={{paddingLeft: '30px', paddingRight: '30px', paddingBottom: '30px', paddingTop: '1px', backgroundColor:'#720a13'}}>
            <div className="center"><h5>Change password</h5></div>
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <div className="input-field col s12">
                    <input id="current-password" name="actualPassword" type="password" className="validate" autoComplete="on" onChange={(e)=>this.handleChange(e)} placeholder="Actual password"/>
                </div>
                <div className="input-field col s12">
                    <input id="new-password" name="password" type="password" className="validate" autoComplete="on" onChange={(e)=>this.handleChange(e)} placeholder="Password"/>
                </div>
                <div className="input-field col s12">
                    <input id="re-new-password" name="rePassword" type="password" className="validate" autoComplete="on" onChange={(e)=>this.handleChange(e)} placeholder="Repeat password"/>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
            </form>
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    abstractTokenFetch: (url, method, data) => dispatch(abstractTokenFetch(url, method, data)),
})

const mapStateToProps = (state) => ({
    email: state.user.email,
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount)