import {Link} from 'react-router-dom'

function PlaylistGameCards({games}) {
    return (

        <div className="playlistCards" key={games.id}>

            <img src={games.image} alt={games.title} width= "200px" height= "115px" />
            <div className="Card-txt">
            <h3>{games.title}</h3>
            <p className="text-muted">{games.developer}</p>
            <p className="text-muted">Likes: {games.rating}</p>
            </div>
        </div>

    )
}

export default PlaylistGameCards