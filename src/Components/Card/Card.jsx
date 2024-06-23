import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, details }) => {
  return (
    <>
      <div className="card1">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{details}</span>
      </div>
    </>
  );
};

export default Card;
