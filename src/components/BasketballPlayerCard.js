import React from "react";
import "./BasketballPlayerCard.css";

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="player-card">
      <img src={image} alt={name} className="player-card__image" />
      <div className="player-card__content">
        <h2 className="player-card__name">{name}</h2>
        <p className="player-card__position">{position}</p>
        <div className="player-card__stats">
          <p>Points per Game: {stats.pointsPerGame}</p>
          <p>Assists per Game: {stats.assistsPerGame}</p>
          <p>Rebounds per Game: {stats.reboundsPerGame}</p>
        </div>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
