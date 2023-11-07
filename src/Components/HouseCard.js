import React from 'react';
import './HouseCard.css';

const HouseCard = ({ house }) => {
  return (
    <div className="house-card">
        <h2>{house.name}</h2>
        <p>Founded: {house.founded}</p>
        <p>Fonder: {house.founder.id('')}</p>
        <p>Titles: {house.titles.join(', ')}</p>
        <p>Current Lord: {house.currentLord.id('')}</p>
        <p>Heir: {house.heir.id('')}</p>
        <p>Words: {house.words}</p>
        <p>Seats: {house.seats.join(', ')}</p>
        <p>Sworn Members {house.swornMembers.join(',')}</p>
    </div>
  );
};

export default HouseCard;