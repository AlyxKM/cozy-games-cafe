import React from "react";
import Filter from "./Filter";
import Search from "./Search";
import AddGame from "./AddGame";

function NavBar({setGameList, fullGameList}) {
    return (
        <div class="NavBar">
        <h3>Playlist</h3>
        <AddGame />
        <Filter setGameList={setGameList} fullGameList={fullGameList}/>
        <Search setGameList={setGameList} fullGameList={fullGameList}/>
        </div>
    )
}

export default NavBar