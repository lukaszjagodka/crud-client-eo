import React from 'react'

const name = localStorage.getItem('name')
const Profile = () => {
    return (
        <div className="container" style={{padding: '20px'}}>
            Profile
            <h4>{name}</h4>
        </div>
    )
}

export default Profile