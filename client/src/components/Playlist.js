import PlaylistGameCards from "./PlaylistGameCards"

function Playlist({playlist}) {
    return (
        <div className="Playlist">
            <h3>lolxee Playlist</h3>
            {playlist.map((playlist) => <PlaylistGameCards key={playlist.id} games={playlist.game} />)}
        </div>
    )
}

export default Playlist