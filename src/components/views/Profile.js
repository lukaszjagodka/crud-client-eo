import React from 'react'
import DeleteAccount from './../users/DeleteAccount';
import ChangePassword from './../users/ChangePassword'

const name = localStorage.getItem('name')
const Profile = () => {
    return (
        <div className="container" style={{padding: '10px'}}>
            <span><h4>{name}</h4></span>
            <div className="container">
                <DeleteAccount/><br/>
                <ChangePassword/>
            </div>
            <div className="container">

            </div>
        </div>
    )
}

export default Profile