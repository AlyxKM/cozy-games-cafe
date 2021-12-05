import React from "react";
import Filter from "./Filter";
import Search from "./Search";
import {Link} from "react-router-dom";


function NavBar({setGameList, fullGameList}) {
    return (
        <div class="NavBar">
        <h3>Playlist</h3>
        <Link to="/games/new">
        <h3>New Game</h3>
        </Link>
        <Filter setGameList={setGameList} fullGameList={fullGameList}/>
        <Search setGameList={setGameList} fullGameList={fullGameList}/>
        </div>
    )
}

export default NavBar