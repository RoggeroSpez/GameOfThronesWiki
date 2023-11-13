import React from 'react';
import './HouseCard.css';

const HouseCard = ({ house }) => {
  return (
    <div className="house-card">
        <h2>{house.name}</h2>
        <p>Founded: {house.founded}</p>
        <p>Fonder: {house.fonder}</p>
        <p>Words: {house.words}</p>
        <p>CurrentLord: {house.currentLord}</p>
        <p>Heir: {house.heir}</p>
      </div>
  );
};

export default HouseCard;