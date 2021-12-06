import React from "react";
import Filter from "./Filter";
import Search from "./Search";
import {Link} from "react-router-dom";


function NavBar({setGameList, fullGameList}) {
    return (
        <div class="NavBar">
        <Link to="/playlist">
        <h3>Playlist</h3>
        </Link>
        <Link to="/games/new">
        <h3>New Game</h3>
        </Link>
        <Filter setGameList={setGameList} fullGameList={fullGameList}/>
        <Search setGameList={setGameList} fullGameList={fullGameList}/>
        </div>
    )
}

export default NavBar