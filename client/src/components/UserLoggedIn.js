import React from 'react'
import {useState} from 'react'

function UserLoggedIn({currentUser, setLoggedIn}) {

    function logOut(){
        fetch("/logout", {method: 'DELETE'})
        setLoggedIn(false)
    }

    return (
        <div className="UserLoggedIn">
            <h3>Welcome, {currentUser.username}!</h3>
            <button class="btn btn-secondary" onClick={logOut}>Log Out</button>

        </div>
    )
}

export default UserLoggedIn