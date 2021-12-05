import React from "react";
import UserLoggedIn from './UserLoggedIn'
import Login from './Login'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Header({setCurrentUser, currentUser, setGameList, fullGameList}) {

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
       fetch('/me')
       .then(res => res.json())
       .then(user => {
           setCurrentUser(user)
           //setLoggedIn(true)
       }) 
     
    }, [])

    return(
        <div class="Header">
            <Link to="/">
            <h2>Cozy Games Cafe</h2>
            </Link>
        {loggedIn === false ? <Login setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser}/> : <UserLoggedIn currentUser={currentUser} setLoggedIn={setLoggedIn}/>}
        </div>
    )
}

export default Header