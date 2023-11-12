import React, { useState, useEffect } from 'react';
import CharacterStats from '../../Components/CharacterStats';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Character = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get(
        `https://anapioficeandfire.com/api/character?page=1&pageSize=1`
      );
      setCharacter(response.data);
    };

    fetchCharacters();
  }, []);

  return (
    <div className="character">
      <h1>Character</h1>
      <div className="character-list">
        {character.map((character) => (
          <Link to={`/character/${character.id}`} key={character.id}>
            <CharacterStats character={character} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Character;