import React, { useState, useEffect } from 'react';
import CharacterCard from '../../Components/CharacterCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Characters.css';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get(
        `https://anapioficeandfire.com/api/characters?page=1&pageSize=10`
      );
      setCharacters(response.data);
    };

    fetchCharacters();
  }, []);

  const handleNextClick = () => {
    axios.get(nextPageUrl)
      .then(response => {
        setCharacters(characters.concat(response.data));
        setNextPageUrl(response.headers.link.split(',').find(link => link.includes('rel="next"')).split(';')[0].replace('<', '').replace('>', ''));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="characters">
      <h1>Characters</h1>
      <div className="character-list">
        {characters.map((character) => (
          <Link to={`/characters/${character.id}`} key={character.id}>
            <CharacterCard character={character} />
          </Link>
        ))}
        
<button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Characters;
//get https://www.anapioficeandfire.com/api/characters/{id or name}/
//
//[
//    {
//        "url": "https://www.anapioficeandfire.com/api/characters",
//        "name": "",
//        "culture": "",
//        "born": "",
//        "died": "",
//        "titles": "",
//        "aliases": "",
//        "father": "",
//        "mother": "",
//        "spouse": "",
//        "allegianceus": []
//    }
//]
//CharacterId= {
//    int Id {get; set; }
//    string Name {get; set; }
//    bool Isfemale {get; set; }
//    string Culture {get; set; }
//    string[] Titles {get; set; }
//    string[] Aliases {get; set; }
//    string Born { get; set; }
//    string Died { get; set; }
//    int? Father { get; set; }
//    int? Mother { get; set; }
//    int? Spouse { get; set; }
//    int[] Allegiances { get; set; }
//};

//Character() => {
//return new Character(
//    Id = Id,
//    Name = Name,
//    IsFemale = IsFemale,
//    Born = Born
//    Died = Died
//    SpouseId = Spouse,
//    FatherId = Father,
//    MotherId = Mother,
//    Culture = Culture,
//    Titles = string.Join(';'Titles),
//    Aliases = string.Join(';', Aliases),
//    AllegiancesIdentifiers = Allegiances
//)
//};
//Data about Characters