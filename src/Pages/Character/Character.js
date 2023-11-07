import React, { useState, useEffect } from 'react';
import CharacterStats from '../../Components/CharacterStats';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Character = () => {
  const [character, setCharacter] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await axios.get(
        `https://anapioficeandfire.com/api/characters?page=1&pageSize=10`
      );
      setCharacter(response.data);
    };

    fetchCharacter();
  }, []);

  const handleNextClick = () => {
    axios.get(nextPageUrl)
      .then(response => {
        setCharacter(character.concat(response.data));
        setNextPageUrl(response.headers.link.split(',').find(link => link.includes('rel="next"')).split(';')[0].replace('<', '').replace('>', ''));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="character">
      <h1>Character</h1>
      <div className="character">
        {character.map((character) => (
          <Link to={`/characters/${character.id}`} key={character.id}>
            <CharacterStats key={character.id}  character={character} />
          </Link>
        ))}
        
<button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Character;