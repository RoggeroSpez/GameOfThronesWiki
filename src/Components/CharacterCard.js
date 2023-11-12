import React from 'react';
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
        <h2>{character.name || character.aliases[0]}</h2>
    </div>
  );
};

export default CharacterCard;


//        <p>Born: {character.born || 'Unknown'}</p>
//<p>Died: {character.died || 'Unknown'}</p>
//<p>Gender: {character.gender || 'Unknown'}</p>
//<p>Father: {character.father || 'Unknown'}</p>
//<p>Mother: {character.mother || 'Unknown'}</p>
//<p>Spouse: {character.spouse || 'Unknown'}</p>
//<p>Culture: {character.culture || 'Unknown'}</p>
//<p>Titles: {character.titles || 'Unknown'}</p>
//<p>Aliases: {character.aliases || 'Unknown'}</p>