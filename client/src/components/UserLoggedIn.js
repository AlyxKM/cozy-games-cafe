import React from 'react'
import {useState} from 'react'

function UserLoggedIn({currentUser, setLoggedIn}) {

    function logOut(){
        fetch("/logout", {method: 'DELETE'})
        setLoggedIn(false)
    }

    return (
        <div className="UserLoggedIn">
            <h3 className="Header-title">Welcome, lolxee!</h3>
            <button className="btn btn-primary" onClick={logOut}>Log Out</button>

        </div>
    )
}

export default UserLoggedIn