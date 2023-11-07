import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Characters from './components/Characters';
import Houses from './components/Houses';
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
            <Route path="/Characters" element={<Characters />} />
            <Route path="/Houses" element={<Houses />} />
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
