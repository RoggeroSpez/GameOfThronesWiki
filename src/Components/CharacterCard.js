import React from 'react';
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
        <h2>{character.name || character.aliases[0]}</h2>
        <section className='Primary'>
        <p>Born: {character.born || 'Unknown'}</p>
        <p>Died: {character.died || 'Unknown'}</p>
        <p>Gender: {character.gender || 'Unknown'}</p>
        <p>Father: {character.father || 'Unknown'}</p>
        <p>Mother: {character.mother || 'Unknown'}</p>
        <p>Spouse: {character.spouse || 'Unknown'}</p>
        </section>
        <section className='Secondary'>
        <p>Culture: {character.culture}</p>
        <p>Titles: {character.titles || 'Unknown'}</p>
        <p>Aliases: {character.aliases || 'Unknown'}</p>
        </section>
    </div>
  );
};

export default CharacterCard;
