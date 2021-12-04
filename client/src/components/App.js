import React from 'react';
import '../App.css';
import {useEffect, useState} from 'react';
import Header from './Header';
import NavBar from './NavBar';
import MainDisplay from './MainDisplay';
// import GameDetail from './GameDetail';

function App() {

  const [gameList, setGameList] = useState([])
  const [fullGameList, setFullGameList] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch("http://localhost:3000/games")
    .then(res => res.json())
    .then(data => {
      setGameList(data)
      setFullGameList(data)
    })
  }, []) 


  return (
    <div className="App">
      <Header setCurrentUser={setCurrentUser} currentUser={currentUser} setGameList={setGameList} fullGameList={fullGameList}/>
      <NavBar setGameList={setGameList} fullGameList={fullGameList}/>
      {/* {selectedGame ? <GameDetail game={selectedGames} handleLikes={handleLikes}/> : null} */}
      <MainDisplay gameList={gameList}/>
     
    </div>
  );
}

export default App;
