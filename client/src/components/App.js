import React from 'react';
import '../App.css';
import {useEffect, useState} from 'react';
import Header from './Header';
import NavBar from './NavBar';
import MainDisplay from './MainDisplay';
import GameDetails from './GameDetails';
import {Route, Routes} from 'react-router-dom';
import AddGame from "./AddGame";

function App() {

  const [gameList, setGameList] = useState([])
  const [fullGameList, setFullGameList] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [selectedGame, setSelectedGame] = useState([])

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


  return (
    <div className="App">
      <Header setCurrentUser={setCurrentUser} currentUser={currentUser} setGameList={setGameList} fullGameList={fullGameList}/>
      <NavBar setGameList={setGameList} fullGameList={fullGameList}/>
      <Routes>
        <Route path="/games" element={selectedGame ? <GameDetails game={selectedGame}/> : null} />
        <Route path="/" element={<MainDisplay gameList={gameList} setSelectedGame={setSelectedGame}/>} />
        <Route path="/games/new" element={<AddGame addNewGame={addNewGame} />} />
      </Routes>
     
     
    </div>
  );
}

export default App;
