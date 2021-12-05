import React from "react";
import {Link} from "react-router-dom";

function GameCards({game, setSelectedGame}) {
    
    return (
        <div class="GameCards" onClick={() => setSelectedGame(game)}>
            <Link to="/games">
            <img src={game.image} alt={game.title} width= "200px" height= "115px" />
            
            <h3>{game.title}</h3>
            <p>{game.developer}</p>
            <p className="likes">Likes: {game.rating}</p>
            </Link>
            
        </div>
    )
}

export default GameCards;