import {Link} from 'react-router-dom'

function PlaylistGameCards({games}) {
    return (
        <div className="playlistCards" key={games.id}>
            <Link to="/games">
            <img src={games.image} alt={games.title} width= "200px" height= "115px" />
            
            <h3>{games.title}</h3>
            <p>{games.developer}</p>
            <p className="likes">Likes: {games.rating}</p>
            </Link>
        </div>
    )
}

export default PlaylistGameCards