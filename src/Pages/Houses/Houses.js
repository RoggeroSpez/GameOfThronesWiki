import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../Components/navigationBar/navBar';

const Houses = () => {
  const [houses, setHouses] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await axios.get('https://anapioficeandfire.com/api/houses?page=1&pageSize=10');
      setHouses(response.data);
    };

    fetchHouses();
  }, []);
    const handleNextClick = () => {
    axios.get(nextPageUrl)
      .then(response => {
        setHouses(Houses.concat(response.data));
        setNextPageUrl(response.headers.link.split(',').find(link => link.includes('rel="next"')).split(';')[0].replace('<', '').replace('>', ''));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <ul>
      <NavBar/>
      {houses.map(house => (
        <li key={house.url}>
          {house.name}
        </li>
      ))}
      <button onClick={handleNextClick}>Next</button>
    </ul>
  );
};

export default Houses;

//        int Id { get; set; }
//        string Name { get; set; }
//        string CoatOfArms { get; set; }
//        string[] Titles { get; set; }
//        int? CurrentLord { get; set; }
//        
//        houses()
//        {
//            return new house()
//            {
//                Id = Id,
//                Name = Name,
//                CoatOfArms = CoatOfArms,
//                CurrentLordId = CurrentLord,
//            };
//        }
//export default houses;