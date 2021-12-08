import {useState, useEffect} from 'react'; 

function GameDetails({game}){


    const imageUrl = game.image2 ? game.image2 : game.image;
    // const newRating = ++game.rating
    

 function handleLikes(e) {  
   e.preventDefault()
     fetch(`http://localhost:3000/games/${game.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({rating: ++game.rating}),
      })
      .then(res => res.json())
      .then(data => console.log("clicked"))
    }

  function handlePlaylist() {
    const gameId = {
      game_id: game.id
    }
    fetch('http://localhost:3000/playtimes', {
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify(gameId)
  })
  }


    return(
        <div className="Details">
            <h2>{game.name}</h2>
            <img src={imageUrl} style={{width:"300px"}} alt= {game.title}/>
            <br></br>
            <p>{game.developer}</p>
            <p>{game.publisher}</p>
            <button className="LikesButton" onClick={handleLikes}>Add a Like</button>
            <button className="PlaylistButton" onClick={handlePlaylist}>Add to Playlist</button>
            <p>{game.desc}</p>
            
        
        </div>
    )
}
export default GameDetails;