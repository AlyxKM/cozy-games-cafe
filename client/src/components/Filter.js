function Filter({setGameList, fullGameList}) {
    function handleFilterByTag(id) {
        const filteredGames = fullGameList.filter((game)=> game.tags.includes(id))
        setGameList(filteredGames)
        console.log(id)
      }

    return (
        <div className="Filter">
            <select name="Dropdown" onChange={(e) => handleFilterByTag(e.target.value)}>
                <option value="">Filter</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Adventure">Adventure</option>
                <option value="Exploration">Exploration</option>
                <option value="Simulation">Simulation</option>
                <option value="Indie">Indie</option>
                <option value="Pixel-Art">Pixel Art</option>
            </select>

        </div>
    )
}

export default Filter