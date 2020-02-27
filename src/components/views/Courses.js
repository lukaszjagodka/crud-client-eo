import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchCourses } from './../../actions/fetchCourses'

class Courses extends Component{
    componentDidMount(){
        // eslint-disable-next-line
        {this.props.fetchCourses()}
    }
    
    render(){
        return(
            <div className="container" style={{padding: '20px'}}>
            Courses
            
         </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCourses: () => dispatch(fetchCourses())
})

const mapStateToProps = (state) => ({
    coursesFromFetch: state.courses.coursesFromFetch
})

export default connect(mapStateToProps, mapDispatchToProps)(Courses)