import React, {Component} from 'react';
import { connect } from 'react-redux';
import { abstractTokenFetch } from '../../actions/abstractTokenFetch'
// import { helperFetch } from '../../helpers/helperFetch'
class DeleteAccount extends Component {
    state = {
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const email = this.props.email;
        const password = this.state.password
        const data = {email: email, password: password}

        abstractTokenFetch('http://localhost:3001/users/deleteaccount', 'DELETE', data)
        // helperFetch('http://localhost:3001/users/deleteaccount', data)
    }
    render(){
        return(
            <div className="container center" style={{backgroundColor: '#26282a', paddingLeft: '30px', paddingRight: '30px', paddingBottom: '30px', paddingTop: '1px'}}>
            <div className="center"><h5>Delete Account</h5></div>
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <div className="input-field col s12">
                    <input id="password" name="password" /*type="password"*/ class="validate" onChange={(e)=>this.handleChange(e)} placeholder="Password"/>
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