import React from 'react';
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
        <h2>{character.name || character.aliases[0]}</h2>
        <p>Born: {character.born || 'Unknown'}          Died: {character.died || 'Unknown'}</p>
        <p>Gender: {character.gender || 'Unknown'}</p>
        <p>Father: {character.father || 'Unknown'}          Mother: {character.mother || 'Unknown'}</p>
        <p>Spouse: {character.spouse || 'Unknown'}</p>
        <p>Culture: {character.culture}</p>
        <p>Titles: {character.titles || 'Unknown'}</p>
        <p>Aliases: {character.aliases || 'Unknown'}</p>
    </div>
  );
};

export default CharacterCard;
