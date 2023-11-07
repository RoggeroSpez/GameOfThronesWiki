import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Character() {
  const { id } = useParams(); console.log('Character ID:', id);
  const [character, setCharacter] = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState(null);

  useEffect(() => {
    console.log('Fetching character data for ID:', id);
    // Make an API call to fetch character data using the 'id' parameter
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://anapioficeandfire.com/api/characters/${id}`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error('Error fetching character data', error);
      }
    };

    fetchCharacter();
  }, [id]);

  const handleNextClick = () => {
    axios.get(nextPageUrl)
      .then(response => {
        setCharacter(Character.concat(response.data));
        setNextPageUrl(response.headers.link.split(',').find(link => link.includes('rel="next"')).split(';')[0].replace('<', '').replace('>', ''));
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  return (
    <div>
      {character.map (
        <div>
        <h1>{character.name || "Unknown"}</h1>
          <p>House: {character.house || "Unknown"}</p>
          <p>Born: {character.born} & Died: {character.died || "Unknown"}</p>
          <p>Gender: {character.gender || "Unknown"}</p>
          <p>Culture: {character.culture || "Unknown"}</p>
          <p>Father: {character.father || "Unknown"}</p>
          <p>Mother: {character.mother || "Unknown"}</p>
          <p>Spouse: {character.spouse || "Unknown"}</p>
          <p>Titles: {character.titles || "Unknown"}</p>
          <p>Aliases: {character.aliases || "Unknown"}</p>
          <p>Allegiance: {character.allegiances || "Unknown"}</p>
        </div>
          )}
          <button onClick={handleNextClick}>Next</button>
    </div>
  );
  }
export default Character;