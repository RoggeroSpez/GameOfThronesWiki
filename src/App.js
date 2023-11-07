import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Characters from './Pages/Characters';
import Houses from './Pages/Houses';
import Home from './Pages/Home';
import NavBar from './components/NavBar';
import gameOfThronesAudio from './Media/gameofthrones.mp3';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/houses" element={<Houses />} />
          </Routes>
        </div>
        <div className="audio-container">
          <audio controls autoPlay>
            <source src={gameOfThronesAudio} type="audio/mp3" />
            Lord Tyron has gone to go get the minstrals.
          </audio>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
