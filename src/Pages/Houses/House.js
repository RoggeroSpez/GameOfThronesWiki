import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HouseCard from '../../Components/HouseCard';

const House = () => {
  const [house, setHouse] = useState([]);
  
  useEffect(() => {
    const fetchHouse = async () => {
      const response = await axios.get(
        `https://anapioficeandfire.com/api/houses?page=1&pageSize=50`
      );
      setHouse(response.data);
    };

    fetchHouse();
  }, []);

  return (
    <div className="houses">
      <h1>Houses</h1>
      <div className="houses-list">
        {house.map((house) => (
            <HouseCard house={house} />
        ))}
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