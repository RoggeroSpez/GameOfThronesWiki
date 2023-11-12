import React, { useState, useEffect } from 'react';
import CharacterStats from '../../Components/CharacterStats';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get(
        `https://anapioficeandfire.com/api/characters?page=1&pageSize=1`
      );
      setCharacters(response.data);
    };

    fetchCharacters();
  }, []);

  return (
    <div className="characters">
      <h1>Character</h1>
      <div className="character-list">
        {characters.map((character) => (
          <Link to={`/character/${character.id}`} key={character.id}>
            <CharacterStats character={character} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Characters;