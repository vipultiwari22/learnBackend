import React from "react";
import "./pokemon.css";

function Pokemon(p) {
  return (
    <div className="pokemon">
      <div className="pokemon-name">{p.name}</div>
      <div>
        <img className="pokemon-img" src={p.image} alt={p.name} />
      </div>
    </div>
  );
}

export default Pokemon;
