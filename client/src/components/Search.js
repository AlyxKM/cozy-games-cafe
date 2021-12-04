function Search({setGameList, fullGameList}) {

    function setSearchKeyWord(title, e) {
        console.log(title)
        const searchedGame = fullGameList.filter((game)=> game.title.toLowerCase().includes(title.toLowerCase()))
        setGameList(searchedGame)
      }

    return (
        <div className="Search">
            <form>
          <input
            class="form-control"
            type="text"
            id="search"
            placeholder="Search Games"
            onInput={(e) => setSearchKeyWord(e.target.value)}
          />
          </form>

        </div>
    )
}
export default Search