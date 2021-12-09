import React from "react";
import {Link} from "react-router-dom";

function GameCards({game, setSelectedGame}) {
    
    return (
        <Link to="/games">
        <div className="Gamebox" onClick={() => setSelectedGame(game)}>
            <img src={game.image} alt={game.title} width= "200px" height= "115px" />  
            <div className="Card-txt">   
            <h3>{game.title}</h3>
            <p className="text-muted">{game.developer}</p> 
            <p className="text-muted">Likes: {game.rating}</p>  
            </div>
        </div>
        </Link>
    )
}

export default GameCards;