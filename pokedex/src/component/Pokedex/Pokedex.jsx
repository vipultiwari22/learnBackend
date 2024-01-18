import React from "react";
import Search from "../search/Search";
import "./Pokedex.css";
import PokemonList from "../PokemonList/PokemonList";

function Pokedex() {
  return (
    <div className="pokedexWrapper">
      <h1 id="pokedex-heading">Pokedex</h1>
      <Search />
      <PokemonList />
    </div>
  );
}

export default Pokedex;
