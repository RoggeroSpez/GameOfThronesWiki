import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterCard.css';

const CharacterStats = ({ character }) => {
  return (
    <div className="character-card">
      <Link to={`/characters/${character.id}`}>
        <h2>{character.name || character.aliases[0]}</h2>
        <p>Culture: {character.culture}</p>
        <p>Gender: {character.gender || 'Unknown'}</p>
        <p>Born: {character.born || 'Unknown'}</p>
        <p>Died: {character.died || 'Unknown'}</p>
        <p>Titles: {character.titles || 'Unknown'}</p>
        <p>Aliases: {character.aliases || 'Unknown'}</p>
        <p>Father: {character.father || 'Unknown'}</p>
        <p>Mother: {character.mother || 'Unknown'}</p>
        <p>Spouse: {character.spouse || 'Unknown'}</p>
        <p>Allegiances: {character.allegiances || 'Unknown'}</p>
      </Link>
    </div>
  );
};

export default CharacterStats;