import React from 'react';
import './HouseCard.css';

const HouseCard = ({ house }) => {
  return (
    <div className="house-card">
        <h2>{house.name}</h2>
        <p>Founded: {house.founded}</p>
        <p>Fonder: {house.fonder}</p>
        <p>Current Lord: {house.currentLord}</p>
        <p>Heir: {house.heir}</p>
        <p>Titles: {house.titles.join(', ')}</p>
        <p>Words: {house.words}</p>
        <p>Seats: {house.seats.join(', ')}</p>
        <p>Sworn Members {house.swornMembers}</p>
    </div>
  );
};

export default HouseCard;