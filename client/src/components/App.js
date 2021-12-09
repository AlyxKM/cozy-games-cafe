import React from 'react';
import '../App.css';
import {useEffect, useState} from 'react';
import Header from './Header';
import NavBar from './NavBar';
import MainDisplay from './MainDisplay';
import GameDetails from './GameDetails';
import {Route, Routes} from 'react-router-dom';
import AddGame from "./AddGame";
import Playlist from './Playlist';
import SignUp from './SignUp';
import NoPlaylist from './NoPlaylist';

function App() {

  const [gameList, setGameList] = useState([])
  const [fullGameList, setFullGameList] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(true)
  const [selectedGame, setSelectedGame] = useState([])
  const [playlist, setPlaylist] = useState([])


  const addNewGame = (newGameObj) => {
    setGameList((prevArray) => [...prevArray, newGameObj])
  }

  useEffect(() => {
    fetch("http://localhost:3000/games")
    .then(res => res.json())
    .then(data => {
      setGameList(data)
      setFullGameList(data)
    })
  }, []) 

  useEffect(() => {
    fetch("http://localhost:3000/playtimes")
    .then(res => res.json())
    .then(data => {
      setPlaylist(data)
    })
  }, []) 


  return (
    <div className="App">
      <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} setCurrentUser={setCurrentUser} currentUser={currentUser} setGameList={setGameList} fullGameList={fullGameList}/>
      <NavBar setGameList={setGameList} fullGameList={fullGameList}/>
      <Routes>
        <Route path="/games" element={selectedGame ? <GameDetails game={selectedGame}/> : null} />
        <Route path="/" element={<MainDisplay gameList={gameList} setSelectedGame={setSelectedGame}/>} />
        <Route path="/games/new" element={<AddGame addNewGame={addNewGame} />} />
        <Route path="/playlist" element= {loggedIn === true ? <Playlist playlist={playlist}/> : <NoPlaylist />}/>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
     
     
    </div>
  );
}

export default App;
