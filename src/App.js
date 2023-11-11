import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/navBar';
import Home from './Pages/Home/Home';
import Characters from './Pages/Characters/Characters';
import House from './Pages/Houses/House';
import gameOfThronesAudio from './Media/gameofthrones.mp3';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <body>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<  Home />} />
            <Route path="/Characters" element={  <Characters />} />
            <Route path="/House" element={<  House />} />
          </Routes>
        </div>
        </body>
        <footer>
          <div className='Img'>
            <img src='MapofWestross' width='100%' height='100%' 
            style={{objectFit: 'cover'}}
            className="App-logo" 
            alt="Map of Westross" 
            title="Map of Westross" /> alt="Map of Westros" /f
          </div>
        <div className="audio-container">
          <audio controls autoPlay>
            <source src={gameOfThronesAudio} type="audio/mp3" />
            Lord Tyrion Lannister has gone to go get the minstrals.
          </audio>
        </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
