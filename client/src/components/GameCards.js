import React from "react";

function GameCards({game}) {
    
    return (
        <div class="GameCards">
            <img src={game.image} alt={game.title} width= "200px" height= "115px" />
            
            <h3>{game.title}</h3>
            <p>{game.developer}</p>
            <button className="likes">Likes: {game.rating}</button>
        </div>
    )
}

export default GameCards;