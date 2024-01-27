import React from "react";
import "./pokemon.css";
import { Link } from "react-router-dom";

function Pokemon(p) {
  return (
    <div className="pokemon">
      <Link to={`pokemon/${p.id}`}>
        <div className="pokemon-name">{p.name}</div>
        <div>
          <img className="pokemon-img" src={p.image} alt={p.name} />
        </div>
      </Link>
    </div>
  );
}

export default Pokemon;
