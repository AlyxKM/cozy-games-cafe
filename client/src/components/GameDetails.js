function GameDetails({game}){

    return(
        <div className="Details">
            <h2>{game.name}</h2>
            <img src={game.image2} style={{width:"300px"}} alt= {game.title}/>
            <br></br>
            <p>{game.developer}</p>
            <p>{game.publisher}</p>
            <button>Likes: {game.rating}</button>
            <p>{game.desc}</p>
            
        
        </div>
    )
}
export default GameDetails;