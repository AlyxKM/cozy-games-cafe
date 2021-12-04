import React from "react";
import UserLoggedIn from './UserLoggedIn'
import Login from './Login'
import {useEffect, useState} from 'react'

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
        <h2 onClick={(e) => setGameList(fullGameList)}>Cozy Games Cafe</h2>
        {loggedIn === false ? <Login setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser}/> : <UserLoggedIn currentUser={currentUser} setLoggedIn={setLoggedIn}/>}
        </div>
    )
}

export default Header