import Icon from "../icons/Icon";
import React from "react";
import "./Card.css";

function Card({ Player, onPlay, index }) {
  let icons = <Icon />;
  if (Player == "x") {
    icons = <Icon name="cross" />;
  } else if (Player == "o") {
    icons = <Icon name="circal" />;
  }
  return (
    <div className="Card" onClick={() => onPlay(index)}>
      {icons}
    </div>
  );
}

export default Card;
