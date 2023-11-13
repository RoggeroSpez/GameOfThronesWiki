import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HouseCard from '../../Components/HouseCard';

function Houses() {
  const [houses, setHouses] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHouses = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://anapioficeandfire.com/api/houses?page=${page}&pageSize=50`
      );
      setHouses((prevHouses) => [...prevHouses, ...response.data]);
      setLoading(false);
    };

    fetchHouses();
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="houses">
      <h1>Houses</h1>
      <div className="house-list">
        {houses.map((house) => (
            <HouseCard house={house} />
        ))}
      </div>
      <div className="loading">
      {loading && <p>Loading...</p>}
      {!loading && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
      </div>
    </div>
  );
}

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