import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HouseCard from '../../Components/HouseCard';

const House = () => {
  const [house, setHouse] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);

  useEffect(() => {
    const fetchHouse = async () => {
      const response = await axios.get(
        `https://anapioficeandfire.com/api/houses?page=1&pageSize=50`
      );
      setHouse(response.data);
    };

    fetchHouse();
  }, []);

  const handleNextClick = () => {
    axios.get(nextPageUrl)
      .then(response => {
        setHouse(house.concat(response.data));
        setNextPageUrl(response.headers.link.split(',').find(link => link.includes('rel="next"')).split(';')[0].replace('<', '').replace('>', ''));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="houses">
      <h1>Houses</h1>
      <div className="houses-list">
        {house.map((house) => (
          <Link to={`/houses/${house.id}`} key={house.id}>
            <HouseCard house={house} />
          </Link>
        ))}
        
<button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default House;

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