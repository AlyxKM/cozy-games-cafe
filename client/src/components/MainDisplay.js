import React from "react";
import GameCards from "./GameCards";

function MainDisplay({gameList}) {


    return (
        <div class="MainDisplay">
        {gameList.map((games) => <GameCards key={games.id} game={games}/>)}
        </div>
    )
}

export default MainDisplay;