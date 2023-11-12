import React, { useState, useEffect } from 'react';
import CharacterStats from '../../Components/CharacterStats';
import axios from 'axios';

const Character = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await axios.get(
        `https://anapioficeandfire.com/api/characters?page=1&pageSize=1`
      );
      setCharacter(response.data);
    };

    fetchCharacter();
  }, []);

  return (
    <div className="character">
      <h1>Character</h1>
      <div className="character-list">
        {character.map((character) => (
            <CharacterStats character={character} />
        ))}
      </div>
    </div>
  );
};

export default Character;