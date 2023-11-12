import React from 'react';
import './HouseCard.css';
function swornMembers(swornMembers){
    return swornMembers.map((member) => {
        return member.name;
    })
}

const HouseCard = ({ house }) => {
  return (
    <div className="house-card">
        <h2>{house.name}</h2>
        <p>Founded: {house.founded} by Fonder: {house.fonder}</p>
        <p>Words: {house.words}</p>
        <p>Titles: {house.titles.join(', ')}</p>
        <p>CurrentLord: {house.currentLord} and Heir: {house.heir}</p>
        <p>Seats: {house.seats.join(', ')}</p>
        <p>SwornMembers: {swornMembers(house.swornMembers).join(', ')}</p>
    </div>
  );
};

export default HouseCard;