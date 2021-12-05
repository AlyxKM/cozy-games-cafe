import React from "react";
import GameCards from "./GameCards";

function MainDisplay({gameList, setSelectedGame}) {


    return (
        <div class="MainDisplay">
        {gameList.map((games) => <GameCards key={games.id} game={games} setSelectedGame={setSelectedGame}/>)}
        </div>
    )
}

export default MainDisplay;